
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize the GoogleGenAI client directly with the API key from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWish = async (name: string): Promise<string> => {
  try {
    // Fix: Refactored the prompt to use systemInstruction for setting the context and role, improving model performance.
    const systemInstruction = `Eres un hada madrina. La temática es princesas de Disney y sueños hechos realidad. El tono debe ser inspirador y dulce.`;
    const prompt = `Genera un deseo corto, mágico y conmovedor (máximo 2 frases) en español para una quinceañera llamada ${name}.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
        }
    });
    
    const text = response.text.trim();
    if (!text) {
        throw new Error("Empty response from API");
    }

    return text;
  } catch (error) {
    console.error("Error generating wish with Gemini:", error);
    throw new Error("Failed to generate a magical wish.");
  }
};
