import type { Train } from "../features/trains/models";
import apiHandler from "./handler";

export const getAllTrain =async () => {
  const response = await apiHandler.get<Train[]>("/trains");
  return response.data;
};