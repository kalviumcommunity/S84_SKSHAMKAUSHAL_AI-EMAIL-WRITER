import Email from "../models/Email.js";

export const saveEmail = async (req, res) => {
  try {
    const { prompt, generatedText, tone, contextTags } = req.body;
    if (!prompt || !generatedText) return res.status(400).json({ error: "prompt and generatedText required" });

    const email = new Email({ prompt, generatedText, tone, contextTags, user: req.userId });
    await email.save();
    res.status(201).json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save email" });
  }
};

export const listEmails = async (req, res) => {
  try {
    const items = await Email.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch emails" });
  }
};
