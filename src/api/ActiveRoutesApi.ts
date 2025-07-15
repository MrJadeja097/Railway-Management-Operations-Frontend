import apiHandler from "./handler";

export const getAllActiveRoutes =async () => {
  const response = await apiHandler.get("/routes");
  return response.data;
};
