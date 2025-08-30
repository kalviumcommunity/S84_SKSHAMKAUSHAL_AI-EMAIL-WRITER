import React, { useState } from "react";

function StopSequence() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/stop/generate-stop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const json = await res.json();
    setResult(json.result);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stop Sequences Demo</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI something (it will stop at ###)"
      />
      <button
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleGenerate}
      >
        Generate with Stop
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Result:</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default StopSequence;
