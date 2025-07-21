import axios from "axios";
import type { ActiveRoute, ActiveRouteFormData } from "../features/active-routes/models";
import apiHandler from "./handler";
import { toast } from "react-toastify";

export const getAllActiveRoutes =async () => {
  const response = await apiHandler.get<ActiveRoute[]>("/routes");
  return response.data;
};

export const createActieveRoute = async (payload: ActiveRouteFormData): Promise<ActiveRoute> => {
  try {
    const { data } = await apiHandler.post<ActiveRoute>("/routes/create-route", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 500) {
        toast.error("Email already exists.");
        throw new Error("Email already exists.");
      } 
      else{
        throw new Error("Unknown Error")
      }
    } 
};