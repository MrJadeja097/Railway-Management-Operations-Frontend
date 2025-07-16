import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const RequireAuth: React.FC = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
};

