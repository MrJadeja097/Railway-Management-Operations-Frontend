import type { Train, TrainFormData } from "../features/trains/models";
import apiHandler from "./handler";



export const getAllTrain =async () => {
  const response = await apiHandler.get<Train[]>("/trains");
  return response.data;
};

export const createTrain = async (payload : TrainFormData ) : Promise<Train> => {
   const response = await apiHandler.post<Train>("/trains", payload);
  return response.data;
}

export const deleteTrain = async (id:number) => {
    const { data } = await apiHandler.delete(`/trains/${id}`);
    return data;
}