import type { AuthResponse } from "../features/auth/models/AuthResponse";
import apiHandler from "./handler";

interface LogInInterface {
  email: string;
  password: string;
}

export const LogInApi = async (credentials: LogInInterface) => {
  const response = await apiHandler.post<AuthResponse>("/auth/login", credentials);
  return response.data;
};