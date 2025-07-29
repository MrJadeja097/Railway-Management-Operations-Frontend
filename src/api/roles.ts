import apiHandler from "./handler";

export interface Roles {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

export const getAllRoles = async () => {
  const response = await apiHandler.get<Roles[]>("/roles/all");
  return response.data;
};

export const getAllPermissionsForRole = async (roleId: number) => {
  const response = await apiHandler.get(`/roles/seePermissionsOfRole/${roleId}`);
  return response.data;
}