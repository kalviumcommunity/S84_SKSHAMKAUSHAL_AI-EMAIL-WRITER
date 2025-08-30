import express from "express";
import { createTokenControlledText } from "../controllers/tokensController.js";

const router = express.Router();
router.post("/generate-tokens", createTokenControlledText);

export default router;
