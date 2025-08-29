import React, { useState } from "react";

function EmailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/emails/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setEmail(data.email);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Email Writer</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a request (e.g., Apology for being late)"
      />
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleGenerate}
      >
        Generate Email
      </button>

      {email && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated Email:</h2>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default EmailGenerator;
