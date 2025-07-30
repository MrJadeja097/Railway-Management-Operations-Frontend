import type { AssignRoleFormData, Staff, StaffFormData } from "../features/staff/models";
import apiHandler from "./handler";



export const getAllStaff = async () => {
  const response = await apiHandler.get<Staff[]>("/staff/all");
  return response.data;
};

export const createStaff = async (payload: StaffFormData): Promise<Staff> => {
  const { role, ...newPayload } = payload;
  const { data } = await apiHandler.post<Staff>("/staff", newPayload);
  if (data.id) {
    const roleAssignment : AssignRoleFormData={
      staffId : data.id,
      role: role
    }
    await assignRole(roleAssignment)
  } else {
    throw new Error("Sent a staff add request to backend & got no staff ID.");
  }
  return data;
};

export const deleteStaff = async (id: number) => {
  const { data } = await apiHandler.delete(`/staff/${id}`);
  return data;
};

export const assignRole = async (payload: AssignRoleFormData) => {
  await apiHandler.post(`/staff/assign-role-to-staff`, payload);
}