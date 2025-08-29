import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// choose a model: "gemini-pro" for text, "gemini-1.5-flash" for cheaper/faster
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });
