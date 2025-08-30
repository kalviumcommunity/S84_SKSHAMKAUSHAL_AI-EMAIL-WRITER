import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Stop-sequence generator
export const generateWithStop = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: `${prompt}\nOnly write until '###'.` }] }],
    generationConfig: {
      stopSequences: ["###"],
    },
  });

  return result.response.text();
};
