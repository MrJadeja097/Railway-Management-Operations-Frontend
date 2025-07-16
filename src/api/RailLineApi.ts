import type { RailLine } from "../features/rail-lines/models";
import apiHandler from "./handler";

export const getAllRailLine =async () => {
  const response = await apiHandler.get<RailLine[]>("/rail-lines");
  return response.data;
};