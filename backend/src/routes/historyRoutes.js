import express from "express";
import {
  saveEmail,
  listEmails,
  getEmail,
  deleteEmail,
} from "../controllers/historyController.js";

import { authMiddleware } from "../utils/auth.js";
router.use(authMiddleware);

const router = express.Router();

router.post("/save", saveEmail);
router.get("/", listEmails);
router.get("/:id", getEmail);
router.delete("/:id", deleteEmail);

export default router;
