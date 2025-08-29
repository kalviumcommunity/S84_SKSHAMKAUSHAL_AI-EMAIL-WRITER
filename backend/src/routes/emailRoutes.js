import express from "express";
import { createEmail, createEmailWithRAG } from "../controllers/emailController.js";

const router = express.Router();

router.post("/generate", createEmail);
router.post("/generate-with-rag", createEmailWithRAG);

export default router;
