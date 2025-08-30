import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmailEditor from "./pages/EmailEditor";
import EmailHistory from "./pages/EmailHistory";

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
    <Router>
      <div className="p-6 max-w-xl mx-auto">
        {/* ✅ Navbar */}
        <nav className="mb-4 flex gap-4">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/edit/123" className="text-blue-600">Test Editor</Link>
          <Link to="/history" className="text-blue-600">History</Link>
        </nav>

        <Routes>
          {/* Home page → Email generator */}
          <Route
            path="/"
            element={
              <div>
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
            }
          />

          {/* Editor page → for editing saved/generated emails */}
          <Route path="/edit/:id" element={<EmailEditor />} />

          {/* History page → shows past generated emails */}
          <Route path="/history" element={<EmailHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
