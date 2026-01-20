
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateAiResponse = async (userInput: string) => {
  if (!process.env.API_KEY) return "I'm sorry, the AI service is currently unavailable. Please reach out via my contact form instead.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AI Assistant for "Aura", a senior creative professional. 
      You are helping a visitor on their portfolio website. 
      Aura is an expert in React, TypeScript, UI/UX, and AI integration. 
      Answer the user's question concisely and professionally, reflecting Aura's sophisticated and modern style.
      
      User said: "${userInput}"`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Let's try that again, or you can contact me directly.";
  }
};
