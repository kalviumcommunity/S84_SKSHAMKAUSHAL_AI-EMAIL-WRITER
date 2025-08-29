import express from "express";
import { generateZeroShotEmail } from "../services/email.service.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const email = await generateZeroShotEmail(prompt);
    res.json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate email" });
  }
});

export default router;
