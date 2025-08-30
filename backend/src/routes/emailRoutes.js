import express from "express";
import { createEmail, createEmailWithRAG, createEmailWithTemplate } from "../controllers/emailController.js";
import { updateEmail } from "../controllers/emailController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();
router.put("/update/:id", authMiddleware, updateEmail);

router.post("/generate", createEmail);
router.post("/generate-with-rag", createEmailWithRAG);
router.post("/generate-with-template", createEmailWithTemplate);

export default router;
