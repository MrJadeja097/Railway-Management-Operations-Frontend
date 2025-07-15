import type { Staff } from "../features/staff/models";
import apiHandler from "./handler";

export const getAllStaff =async () => {
  const response = await apiHandler.get<Staff[]>("/staff/all");
  return response.data;
};