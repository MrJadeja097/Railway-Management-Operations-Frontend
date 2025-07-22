import { z } from "zod";

export const RailLineUpdateSchema = z.object({
  name: z.string().min(1, "Rail Line name is required"),
  description: z.string().min(1, "Rail Line description is required"),
  startStation: z.number().int().positive("Start Station ID is required"),
  endStation: z.number().int().positive("End Station ID is required"),
  totalLength: z.number().int().positive("Total length should be positive"),
});

export type RailLineUpdateFormData = z.infer<typeof RailLineUpdateSchema>;
