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

  const { data } = await apiHandler.post<Staff>("/staff", payload);

  if (data.id) {
    await apiHandler.get<Role>(`/staff/assign-role-to-staff/${data.id}/${role}`);
  } else {
    throw new Error("Sent a staff add request to backend & got no staff ID.");
  }
  return data;
};

export const deleteStaff = async (id: number) => {
  const { data } = await apiHandler.delete(`/staff/${id}`);
  return data;
};
