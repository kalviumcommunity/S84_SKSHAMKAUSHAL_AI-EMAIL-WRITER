// backend/routes/historyRoutes.js
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"; 
import Email from "../models/Email.js";  // assuming you save emails in DB

const router = express.Router();

// GET /api/history → get logged-in user's history
router.get("/", authMiddleware, async (req, res) => {
  try {
    const emails = await Email.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
