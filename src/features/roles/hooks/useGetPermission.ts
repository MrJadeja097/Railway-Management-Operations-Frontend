import { useQuery } from "@tanstack/react-query";
import { getAllPermissionsForRole } from "../../../api";

export const usePermissionsByRole = (roleId: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["permissions", roleId],
    queryFn: async () => await getAllPermissionsForRole(roleId),
    enabled, 
    staleTime: 1000 * 60 * 5, 
  });
};
