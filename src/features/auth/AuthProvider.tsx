import React, { createContext, useContext, useMemo, useState } from "react";

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("access-token"));

  const login = (newToken: string) => {
    localStorage.setItem("access-token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    setToken(null);;
  };

  const value = useMemo(() => ({ token,  login, logout }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
