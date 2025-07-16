import type { Station } from "../features/stations/models";
import apiHandler from "./handler";

export const getAllStation =async () => {
  const response = await apiHandler.get<Station[]>("/stations");
  return response.data;
};