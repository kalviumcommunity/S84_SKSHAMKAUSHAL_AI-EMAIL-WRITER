import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      login(data.token, data.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input className="w-full p-2 border mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 border mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleSubmit}>Login</button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default Login;
