import React, { createContext, useContext, useMemo, useState } from "react";
import type { AuthResponse } from "./models/AuthResponse";
import { toast } from "react-toastify";

interface AuthContextProps {
  userName: string | null;
  role: string | null;
  token: string | null;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("access-token"));
  const [userName, setUserName] = useState<string | null>(() => localStorage.getItem("user-name"));
  const [role, setRole] = useState<string | null>(() => localStorage.getItem("user-role"));


  const login = (data: AuthResponse) => {
    localStorage.setItem("access-token", data.token);
    localStorage.setItem("user-name", data.user_name);
    localStorage.setItem("user-role", data.role);
    setToken(data.token);
    setUserName(data.user_name)
    setRole(data.role)
  };

  const logout = () => {
    setToken(null);
    setUserName(null)
    setRole(null)
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-name");
    localStorage.removeItem("user-role");
    toast.warning("Logged Out !")
  };

  const value = useMemo(() => ({ token,  login, logout, userName, role }), [token, userName, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
