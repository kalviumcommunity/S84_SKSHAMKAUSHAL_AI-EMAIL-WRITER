import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateStructuredEmail = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: `Generate an email as JSON with fields: subject, body, tone. Request: ${prompt}` }] }]
  });

  // Try parsing JSON safely
  try {
    return JSON.parse(result.response.text());
  } catch {
    return { subject: "Error", body: result.response.text(), tone: "Unknown" };
  }
};
