import express from "express";
import { createServer as createViteServer } from "vite";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Modality } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory database
const db = {
  users: [
    { id: "admin", email: "admin@easydoctor.io", name: "Admin", role: "admin" },
    { id: "fabio", email: "fabio@easydoctor.io", name: "Fabio Vantaggiato", role: "contributor" },
    { id: "alberto", email: "a.giacobone@axura.net", name: "Alberto Giacobone", role: "contributor" }
  ],
  invites: [
    { token: "INVITE-123", used: false, role: "contributor" }
  ],
  posts: []
};

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Ensure audio directory exists
const audioDir = path.join(__dirname, "audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const upload = multer({ dest: "uploads/" });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  app.use("/audio", express.static(path.join(__dirname, "audio")));

  // GA4 Measurement Protocol Helper
  const trackGA4Event = async (clientId: string, eventName: string, params: object = {}) => {
    const measurementId = process.env.GA4_MEASUREMENT_ID || 'G-JGPZWLZKFC';
    const apiSecret = process.env.GA4_API_SECRET;

    if (!apiSecret) {
      console.warn("GA4_API_SECRET non configurata. Salto tracciamento server-side.");
      return;
    }

    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [{
            name: eventName,
            params: {
              ...params,
              engagement_time_msec: "100",
            },
          }],
        }),
      });
      console.log(`Evento GA4 inviato: ${eventName}`);
    } catch (error) {
      console.error('Errore invio evento GA4:', error);
    }
  };

  // API Routes
  
  // GA4 Tracking Proxy
  app.post("/api/track", async (req, res) => {
    const { clientId, eventName, params } = req.body;
    if (!clientId || !eventName) {
      return res.status(400).json({ error: "clientId e eventName sono obbligatori" });
    }
    await trackGA4Event(clientId, eventName, params);
    res.json({ success: true });
  });

  // Auth: Verify Invite Token
  app.post("/api/auth/verify-invite", (req, res) => {
    const { token } = req.body;
    const invite = db.invites.find(i => i.token === token && !i.used);
    if (invite) {
      res.json({ success: true, role: invite.role });
    } else {
      res.status(401).json({ success: false, message: "Token non valido o già usato" });
    }
  });

  // Auth: Login with Email (Simplified for demo)
  app.post("/api/auth/login", (req, res) => {
    const { email } = req.body;
    const user = db.users.find(u => u.email === email);
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Utente non trovato" });
    }
  });

  // Posts: Get all published posts
  app.get("/api/posts", (req, res) => {
    const publishedPosts = db.posts.filter(p => p.status === "published");
    res.json(publishedPosts);
  });

  // Posts: Get all posts for a user
  app.get("/api/posts/user/:email", (req, res) => {
    const userPosts = db.posts.filter(p => p.authorEmail === req.params.email);
    res.json(userPosts);
  });

  // Posts: Get single post
  app.get("/api/posts/:id", (req, res) => {
    const post = db.posts.find(p => p.id === req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post non trovato" });
    }
  });

  // Posts: Create post
  app.post("/api/posts", upload.single("coverImage"), async (req, res) => {
    try {
      const { title, content, tags, authorEmail, authorName, status } = req.body;
      const coverImage = req.file ? `/uploads/${req.file.filename}` : null;
      
      const newPost = {
        id: uuidv4(),
        title,
        content,
        tags: tags ? JSON.parse(tags) : [],
        coverImage,
        authorEmail,
        authorName: authorName || authorEmail?.split('@')[0] || "Utente",
        status: status || "draft",
        createdAt: new Date().toISOString(),
        audioUrl: null
      };

      db.posts.push(newPost);
      res.json(newPost);
    } catch (error) {
      res.status(500).json({ error: "Errore durante la creazione del post" });
    }
  });

  // Posts: Update post
  app.put("/api/posts/:id", upload.single("coverImage"), async (req, res) => {
    try {
      const { title, content, tags, status } = req.body;
      const postIndex = db.posts.findIndex(p => p.id === req.params.id);
      
      if (postIndex === -1) {
        return res.status(404).json({ message: "Post non trovato" });
      }

      const post = db.posts[postIndex];
      
      if (title) post.title = title;
      if (content) post.content = content;
      if (tags) post.tags = JSON.parse(tags);
      if (status) post.status = status;
      if (req.file) post.coverImage = `/uploads/${req.file.filename}`;

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Errore durante l'aggiornamento del post" });
    }
  });

  // TTS: Generate Audio for a post
  app.post("/api/posts/:id/generate-audio", async (req, res) => {
    try {
      const post = db.posts.find(p => p.id === req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post non trovato" });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Strip HTML tags for TTS
      const plainText = post.content.replace(/<[^>]*>?/gm, '');
      const prompt = `Leggi il seguente testo in italiano in modo chiaro e professionale, come un podcast:\n\nTitolo: ${post.title}\n\n${plainText}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Puck' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio) {
        const audioFilename = `${post.id}.wav`;
        const audioPath = path.join(audioDir, audioFilename);
        fs.writeFileSync(audioPath, Buffer.from(base64Audio, 'base64'));
        
        post.audioUrl = `/audio/${audioFilename}`;
        res.json({ success: true, audioUrl: post.audioUrl });
      } else {
        res.status(500).json({ error: "Nessun audio generato" });
      }
    } catch (error) {
      console.error("TTS Error:", error);
      res.status(500).json({ error: "Errore durante la generazione dell'audio" });
    }
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
