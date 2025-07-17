import axios, { AxiosError } from "axios";
import type { Role, Staff } from "../features/staff/models";
import apiHandler from "./handler";

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
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 500) {
        console.error("Email already exists.");
        throw new Error("Email already exists.");
      } else {
        console.error("An error occurred while creating the staff member.");
        throw new Error("An error occurred while creating the staff member.");
      }
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("An unknown error occurred.");
    }
  }
};
