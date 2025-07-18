import type { Station, StationFormData } from "../features/stations/models";
import apiHandler from "./handler";

export const getAllStation =async () => {
  const response = await apiHandler.get<Station[]>("/stations");
  return response.data;
};

export const createStation = async (payload : StationFormData ) : Promise<Station> => {
   const response = await apiHandler.post<Station>("/Stations", payload);
  return response.data;
}