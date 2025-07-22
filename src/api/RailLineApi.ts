import axios from "axios";
import { toast } from "react-toastify";
import type { RailLine, RailLineFormData } from "../features/rail-lines/models";
import apiHandler from "./handler";

export const getAllRailLine =async () => {
  const response = await apiHandler.get<RailLine[]>("/rail-lines");
  return response.data;
};

export const createRailLine = async (payload: RailLineFormData): Promise<RailLine> => {
  try {
    const { data } = await apiHandler.post<RailLine>("/rail-lines", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response)  {
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message);
      } 
      else{
        throw new Error("Unknown Error")
      }
    } 
};

export const deleteRailLine = async (id:number) => {
    const { data } = await apiHandler.delete(`/rail-lines/${id}`);
    return data;
}