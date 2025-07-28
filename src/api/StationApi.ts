import { toast } from "react-toastify";
import type { Station, StationFormData } from "../features/stations/models";
import apiHandler from "./handler";
import axios from "axios";

export const getAllStation = async () => {
  const response = await apiHandler.get<Station[]>("/stations");
  return response.data;
};

export const createStation = async (
  payload: StationFormData
): Promise<Station> => {
    const response = await apiHandler.post<Station>("/Stations", payload);
    return response.data;
}

export const deleteStation = async (id: number) => {
  const { data } = await apiHandler.delete(`/stations/${id}`);
  return data;
};

export const updateStation = async (
  id: number,
  payload: Partial<Station>
): Promise<Station> => {
  const { data } = await apiHandler.patch<Station>(`/stations/${id}`, payload);
  return data;
};
