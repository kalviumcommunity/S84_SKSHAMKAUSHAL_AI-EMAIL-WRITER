import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EmailEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEmail = async () => {
      const res = await fetch(`http://localhost:5000/api/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const found = data.find((item) => item._id === id);
      if (found) setEmail(found.email);
    };
    fetchEmail();
  }, [id, token]);

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/api/emails/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ updatedText: email }),
    });
    navigate("/history"); // ✅ redirect back to history
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✏️ Edit Email Draft</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="8"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleUpdate}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EmailEditor;
