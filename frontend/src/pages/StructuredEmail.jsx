import React, { useState } from "react";

function StructuredEmail() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState(null);

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/structured-emails/generate-structured", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Structured Email Generator</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter request (e.g., Welcome email for new employee)"
      />
      <button
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleGenerate}
      >
        Generate JSON Email
      </button>

      {data && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated JSON:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default StructuredEmail;
