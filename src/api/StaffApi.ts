import axios, { AxiosError } from "axios";
import type { Role, Staff } from "../features/staff/models";
import apiHandler from "./handler";
import { toast } from "react-toastify";

interface CreateStaffPayload {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  Address: string;
  city: string;
  role?: string;
}

export const getAllStaff = async () => {
  const response = await apiHandler.get<Staff[]>("/staff/all");
  return response.data;
};

export const createStaff = async (payload: CreateStaffPayload): Promise<Staff> => {
  const role = payload.role;
  delete payload.role;

  try {
    const { data } = await apiHandler.post<Staff>("/staff", payload);
    console.log("Sent a staff add request to backend.");

    if (data.id) {
      const response = await apiHandler.get<Role>(`/staff/assign-role-to-staff/${data.id}/${role}`);
      console.log(response.data);
    } else {
      console.log("Sent a staff add request to backend & got no staff ID.");
    }

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

export const deleteStaff = async (id:number) => {
    const { data } = await apiHandler.delete(`/staff/${id}`);
    return data;
}
