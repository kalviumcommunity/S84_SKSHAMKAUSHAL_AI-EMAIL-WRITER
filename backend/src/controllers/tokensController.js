import { generateWithTokens } from "../utils/geminiClient.js";

export const createTokenControlledText = async (req, res) => {
  try {
    const { prompt, maxTokens } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const output = await generateWithTokens(prompt, maxTokens || 50);
    res.json({ result: output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate with token limit" });
  }
};
