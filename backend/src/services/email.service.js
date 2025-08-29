import { model } from "../config/gemini.js";

export async function generateZeroShotEmail(prompt) {
  const response = await model.generateContent(
    `Write a professional email for the following request: ${prompt}`
  );

  const text = response.response.text();
  return {
    subject: "Generated Email",
    body: text,
  };
}
