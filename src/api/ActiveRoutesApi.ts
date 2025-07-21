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
    if (axios.isAxiosError(error) && error.response)  {
      console.log(error.response.data.message);
      
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message);
      } 
      else{
        throw new Error("Unknown Error")
      }
    } 
};