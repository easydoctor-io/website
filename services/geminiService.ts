import { GoogleGenAI } from "@google/genai";
import { INSTRUMENTS } from '../data/clinicalData';

const getClient = () => {
    const apiKey = process.env.API_KEY || ''; 
    if (!apiKey) {
      console.warn("API Key is missing. Gemini features will not work.");
    }
    return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
Sei un assistente esperto di Supporto alle Decisioni Cliniche per una piattaforma di Digital Patient Engagement.
Hai accesso a una specifica libreria di questionari validati (PROM):
${JSON.stringify(INSTRUMENTS.map(i => ({ name: i.name, acronym: i.acronym, category: i.category, use: i.description, trigger: i.alertTrigger })))}

Il tuo obiettivo è assistere i medici nella selezione dello strumento giusto.
1. Se un utente chiede di una condizione specifica (es. "Parkinson"), raccomanda lo strumento pertinente dalla libreria.
2. Spiega *perché* quello strumento è utile basandoti sulla sua descrizione e sugli alert trigger.
3. Mantieni le risposte professionali, concise e orientate alla clinica. Rispondi in Italiano.
4. NON dare consigli medici o diagnosi. Concentrati sugli *strumenti* disponibili nella libreria.
`;

// Old non-streaming method (kept for fallback/reference if needed)
export const sendClinicalQuery = async (query: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-3-flash-preview';

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: 'user',
          parts: [{ text: query }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      }
    });

    return response.text || "Mi scuso, non sono riuscito a generare una risposta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Servizio temporaneamente non disponibile.";
  }
};

// New Streaming Method
export async function* sendClinicalQueryStream(query: string, context?: string) {
  try {
    const ai = getClient();
    const model = 'gemini-3-flash-preview';
    
    // Inject dynamic context if provided (e.g., current page)
    const contextInstruction = context ? `\nL'utente sta attualmente visualizzando la pagina: ${context}.` : '';

    const responseStream = await ai.models.generateContentStream({
      model: model,
      contents: [
        {
          role: 'user',
          parts: [{ text: query }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION + contextInstruction,
        temperature: 0.2,
      }
    });

    for await (const chunk of responseStream) {
      yield chunk.text;
    }

  } catch (error) {
    console.error("Gemini Stream API Error:", error);
    yield "Errore nella comunicazione con il servizio AI.";
  }
}