import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import templates from "../data/templates.json" assert { type: "json" };

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateEmailWithTemplate = async (prompt, tone) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const chosenTone = templates[tone] || templates["formal"];

  const result = await model.generateContent(`
  Tone Instruction: ${chosenTone}

  Write a professional email for this request:
  ${prompt}
  `);

  return result.response.text();
};
