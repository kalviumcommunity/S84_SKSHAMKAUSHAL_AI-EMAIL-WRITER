import React, { useState } from "react";

function TemplateEmailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("formal");
  const [email, setEmail] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/emails/generate-with-template", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, tone }),
    });
    const data = await res.json();
    setEmail(data.email);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Email Writer (Tone Templates)</h1>
      
      <textarea
        className="w-full p-2 border rounded mb-3"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a request (e.g., Apology for late reply)"
      />

      <select
        className="w-full p-2 border rounded mb-3"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
        <option value="apology">Apology</option>
        <option value="reminder">Reminder</option>
      </select>

      <button
        className="px-4 py-2 bg-purple-600 text-white rounded"
        onClick={handleGenerate}
      >
        Generate Email
      </button>

      {email && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated Email ({tone}):</h2>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default TemplateEmailGenerator;
