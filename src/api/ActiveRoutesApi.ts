import type { ActiveRoute } from "../features/active-routes/models";
import apiHandler from "./handler";

export const getAllActiveRoutes =async () => {
  const response = await apiHandler.get<ActiveRoute[]>("/routes");
  return response.data;
};