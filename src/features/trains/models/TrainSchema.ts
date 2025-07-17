import { z } from "zod";

export const TrainSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  total_coaches: z.number().min(1, "At least 1 coach"),
  top_speed: z.number().min(1, "Top speed must be positive"),
  status: z.enum(["ACTIVE", "GROUNDED", "UNDER_MAINTENANCE", "ON_ACTIVEROUTE"]),
});

export type TrainFormData = z.infer<typeof TrainSchema>;