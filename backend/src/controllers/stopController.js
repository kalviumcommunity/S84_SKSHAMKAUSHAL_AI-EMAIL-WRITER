import { generateWithStop } from "../utils/geminiClient.js";

export const createStopControlledText = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const output = await generateWithStop(prompt);
    res.json({ result: output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate with stop sequence" });
  }
};
