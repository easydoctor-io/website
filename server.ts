import express from "express";
import { createServer as createViteServer } from "vite";

import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Modality } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory database




async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(cors());
  app.use(express.json());


  // API Routes
  



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

try {
  startServer();
} catch (error) {
  console.error("Failed to start server:", error);
  process.exit(1); // Exit with a non-zero code to indicate failure
}
