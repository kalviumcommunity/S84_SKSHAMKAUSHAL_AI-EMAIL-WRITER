// controllers/emailController.js
import Email from "../models/Email.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST /api/email/generate
export const generateEmail = async (req, res) => {
  try {
    const { prompt } = req.body;

    // ✅ Call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: `Write a professional email: ${prompt}` }],
    });

    const generatedText = completion.choices[0].message.content;

    // ✅ Save generated email to DB with logged-in user
    const newEmail = new Email({
      user: req.user.id,   // comes from auth middleware
      body: generatedText,
    });

    await newEmail.save();

    res.json({ body: generatedText });
  } catch (err) {
    console.error("❌ Error generating email:", err);
    res.status(500).json({ error: "Failed to generate email" });
  }
};
