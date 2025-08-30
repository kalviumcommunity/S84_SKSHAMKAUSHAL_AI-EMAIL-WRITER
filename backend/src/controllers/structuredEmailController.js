import { generateStructuredEmail } from "../utils/geminiClient.js";

export const createStructuredEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const emailData = await generateStructuredEmail(prompt);
    res.json(emailData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate structured email" });
  }
};
