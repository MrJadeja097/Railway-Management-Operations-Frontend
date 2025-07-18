import { toast } from "react-toastify";
import type { Station, StationFormData } from "../features/stations/models";
import apiHandler from "./handler";
import axios from "axios";

export const getAllStation =async () => {
  const response = await apiHandler.get<Station[]>("/stations");
  return response.data;
};

export const createStation = async (payload : StationFormData ) : Promise<Station> => {
  try {
    const response = await apiHandler.post<Station>("/Stations", payload);
    return response.data;
  } catch (error) {
     if (axios.isAxiosError(error) && error.response && error.response.status === 400) {
        toast.error("Station name must be Unique.");
        throw new Error("Station name must be Unique.");
      } 
      else{
        throw new Error("Unknown Error")
      }
  }
}

export const deleteStation = async (id:number) => {
    const { data } = await apiHandler.delete(`/stations/${id}`);
    return data;
}