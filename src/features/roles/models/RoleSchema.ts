import { z } from "zod";

export const RoleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export type RoleFormData = z.infer<typeof RoleSchema>;
