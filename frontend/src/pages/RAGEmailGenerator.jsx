import React, { useState } from "react";

function RAGEmailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/emails/generate-with-rag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setEmail(data.email);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Email Writer (RAG)</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a request (e.g., Follow-up on meeting)"
      />
      <button
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
        onClick={handleGenerate}
      >
        Generate Context-Aware Email
      </button>

      {email && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated Email (with Context):</h2>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default RAGEmailGenerator;
