import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { LogInApi } from "../../api";

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await LogInApi({email, password});
      login(res);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50 w-full max-w-md">
        <h1 className="text-3xl font-light text-cyan-100 mb-4">🔐 Staff Login</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-slate-300">Email</label>
            <input className="w-full p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-200" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-slate-300">Password</label>
            <input className="w-full p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-200" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="w-full py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg transition">Login</button>
        </form>
      </div>
    </div>
  );
};
