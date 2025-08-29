import Email from "../models/Email.js";

// Save generated email
export const saveEmail = async (req, res) => {
  try {
    const { prompt, generatedText, tone, contextTags } = req.body;
    if (!prompt || !generatedText) {
      return res.status(400).json({ error: "prompt and generatedText required" });
    }
    const email = new Email({ prompt, generatedText, tone, contextTags });
    await email.save();
    res.status(201).json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save email" });
  }
};

// List emails (with pagination)
export const listEmails = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || "1"));
    const limit = Math.max(1, parseInt(req.query.limit || "20"));
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Email.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Email.countDocuments(),
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch emails" });
  }
};

export const getEmail = async (req, res) => {
  try {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ error: "Email not found" });
    res.json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch email" });
  }
};

export const deleteEmail = async (req, res) => {
  try {
    const email = await Email.findByIdAndDelete(req.params.id);
    if (!email) return res.status(404).json({ error: "Email not found" });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete email" });
  }
};
