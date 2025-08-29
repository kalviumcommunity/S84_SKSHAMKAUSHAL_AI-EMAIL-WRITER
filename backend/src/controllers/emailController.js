import { generateEmail } from "../utils/geminiClient.js";

export const createEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const emailText = await generateEmail(prompt);
    res.json({ email: emailText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate email" });
  }
};

