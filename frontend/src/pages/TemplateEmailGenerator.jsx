import React, { useState } from "react";

function TemplateEmailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("formal");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/emails/generate-with-template", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tone }),
      });
      const data = await res.json();
      setEmail(data.email || data.generatedText || "");
    } catch (err) {
      console.error(err);
      setMessage("Failed to generate email.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!email) return setMessage("Nothing to save yet.");
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/history/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          generatedText: email,
          tone,
          contextTags: ["template"],
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      setMessage("Saved to history ✅");
    } catch (err) {
      console.error(err);
      setMessage("Failed to save email.");
    } finally {
      setSaving(false);
    }
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

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Email"}
        </button>

        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={handleSave}
          disabled={saving || !email}
        >
          {saving ? "Saving..." : "Save to History"}
        </button>
      </div>

      {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}

      {email && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Generated Email ({tone}):</h2>
          <pre className="whitespace-pre-wrap">{email}</pre>
        </div>
      )}
    </div>
  );
}

export default TemplateEmailGenerator;
