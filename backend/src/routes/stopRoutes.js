import express from "express";
import { createStopControlledText } from "../controllers/stopController.js";

const router = express.Router();
router.post("/generate-stop", createStopControlledText);

export default router;
