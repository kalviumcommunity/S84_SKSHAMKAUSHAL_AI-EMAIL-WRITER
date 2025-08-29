import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  generatedText: { type: String, required: true },
  tone: { type: String, default: "formal" },
  contextTags: { type: [String], default: [] }, // e.g., ["RAG","Policy"]
  createdAt: { type: Date, default: Date.now },
});

const Email = mongoose.model("Email", EmailSchema);
export default Email;
