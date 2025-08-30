import express from "express";
import { createStructuredEmail } from "../controllers/structuredEmailController.js";

const router = express.Router();
router.post("/generate-structured", createStructuredEmail);

export default router;
