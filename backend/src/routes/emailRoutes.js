import express from "express";
import { createEmail, createEmailWithRAG, createEmailWithTemplate } from "../controllers/emailController.js";

const router = express.Router();

router.post("/generate", createEmail);
router.post("/generate-with-rag", createEmailWithRAG);
router.post("/generate-with-template", createEmailWithTemplate);

export default router;
