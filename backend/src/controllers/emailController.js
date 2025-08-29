import { generateEmail } from "../utils/geminiClient.js";
import { generateEmailWithRAG } from "../utils/ragClient.js";

// Old: Context-Aware
export const createEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const emailText = await generateEmail(prompt);
    res.json({ email: emailText });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate email" });
  }
};

// New: RAG
export const createEmailWithRAG = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const emailText = await generateEmailWithRAG(prompt);
    res.json({ email: emailText });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate email with RAG" });
  }
};
