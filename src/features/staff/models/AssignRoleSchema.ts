import { z } from "zod";

export const AssignRoleSchema = z.object({
  staffId: z.number(),
  role: z.string().min(1, "Role is required"),
});

export type AssignRoleFormData = z.infer<typeof AssignRoleSchema>;