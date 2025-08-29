import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import context from "../data/context.json" assert { type: "json" };

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateEmailWithRAG = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Attach context dynamically
  const systemContext = `
  Company Policy: ${context.company_policy}
  Tone: ${context.tone}
  Signature: ${context.signature}
  `;

  const result = await model.generateContent(`
  Using the following context:
  ${systemContext}

  Generate a professional email for this request:
  ${prompt}
  `);

  return result.response.text();
};
