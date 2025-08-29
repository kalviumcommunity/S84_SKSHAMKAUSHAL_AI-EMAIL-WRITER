import { generateEmailWithTemplate } from "../utils/templateClient.js";

// Template + Tone
export const createEmailWithTemplate = async (req, res) => {
  try {
    const { prompt, tone } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const emailText = await generateEmailWithTemplate(prompt, tone);
    res.json({ email: emailText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate email with template" });
  }
};
