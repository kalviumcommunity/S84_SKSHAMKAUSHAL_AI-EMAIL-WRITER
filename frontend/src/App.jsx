import { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:5000/api/email/generate", {
      prompt,
    });
    setEmail(res.data.body);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Email Writer – Zero Shot</h1>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your request (e.g., Apology for being late)..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        Generate Email
      </button>
      {email && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold">Generated Email:</h2>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
