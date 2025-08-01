import type { PermissionFormData, Role, RoleFormData } from "../features/roles";
import apiHandler from "./handler";

export const getAllRoles = async () => {
  const response = await apiHandler.get<Role[]>("/roles/all");
  return response.data;
};

export const getAllPermissionsForRole = async (roleId: number) => {
  const response = await apiHandler.get(`/roles/seePermissionsOfRole/${roleId}`);
  return response.data;
}

export const createRole = async (payload: RoleFormData): Promise<Role> => {
    const response = await apiHandler.post<Role>("/roles/create_role", payload);
    return response.data;
}

export const deleteRole = async (id: number) => {
  const { data } = await apiHandler.delete(`/roles/${id}`);
  return data;
};

export const addPermission = async (payload: PermissionFormData) => {
  await apiHandler.post(`/roles/add_permission`, payload);
}

export const removePermission = async (payload: PermissionFormData) => {
  await apiHandler.post(`/roles/remove_permission`, payload);
}