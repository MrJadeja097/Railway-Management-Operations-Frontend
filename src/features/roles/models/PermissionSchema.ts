import { z } from "zod";

export const PermissionSchema = z.object({
  roleId: z.number(),
  permissionName: z.string().min(1, "Permission is required"),
});

export type PermissionFormData = z.infer<typeof PermissionSchema>;
