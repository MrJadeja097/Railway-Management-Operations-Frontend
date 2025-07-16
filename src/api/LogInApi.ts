import apiHandler from "./handler";

interface LogInInterface {
  email: string;
  password: string;
}

export const LogInApi = async (credentials: LogInInterface) => {
  const response = await apiHandler.post<string>("/auth/login", credentials);
  return response.data;
};
