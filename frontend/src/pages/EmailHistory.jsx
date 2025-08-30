import React, { useEffect, useState } from "react";

function EmailHistory() {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem("token"); // ✅ Assuming you saved JWT after login/signup

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setHistory(data);
      } catch (err) {
        console.error("❌ Error fetching history", err);
      }
    };

    fetchHistory();
  }, [token]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📜 Email History</h1>
      {history.length === 0 ? (
        <p className="text-gray-500">No emails found.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((item, idx) => (
            <li key={idx} className="p-3 border rounded bg-gray-50">
              <p className="text-gray-700">{item.body}</p> {/* ✅ FIXED */}
              <small className="text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmailHistory;
