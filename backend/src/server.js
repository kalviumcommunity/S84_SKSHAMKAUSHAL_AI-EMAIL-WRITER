import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import emailRoutes from "./routes/emailRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();
await connectDB(); // top-level await if node supports it; otherwise call inside async IIFE

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/emails", emailRoutes);
app.use("/api/history", historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));

