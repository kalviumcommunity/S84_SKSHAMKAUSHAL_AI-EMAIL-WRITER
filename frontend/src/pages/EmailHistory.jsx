import React, { useEffect, useState } from "react";

function EmailHistory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [selected, setSelected] = useState(null);

  const fetchList = async (p = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/history?page=${p}&limit=${limit}`);
      const data = await res.json();
      setItems(data.items || data.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchList(page); }, [page]);

  const handleView = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/history/${id}`);
      const data = await res.json();
      setSelected(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this saved email?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/history/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setItems((prev) => prev.filter((it) => it._id !== id));
      if (selected && selected._id === id) setSelected(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saved Email History</h1>

      {loading ? (
        <p>Loading…</p>
      ) : items.length === 0 ? (
        <p>No saved emails yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <ul className="space-y-2">
              {items.map((it) => (
                <li key={it._id} className="p-3 border rounded flex justify-between items-start">
                  <div>
                    <div className="text-sm text-gray-700">{it.prompt}</div>
                    <div className="text-xs text-gray-500">{new Date(it.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm" onClick={() => handleView(it._id)}>View</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded text-sm" onClick={() => handleDelete(it._id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            {selected ? (
              <div className="p-3 border rounded bg-gray-50">
                <h2 className="font-semibold mb-2">Preview</h2>
                <div className="text-sm whitespace-pre-wrap">{selected.generatedText}</div>
                <div className="text-xs mt-3 text-gray-500">Tone: {selected.tone}</div>
              </div>
            ) : (
              <div className="p-3 border rounded text-sm text-gray-500">Select an email to preview</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailHistory;
