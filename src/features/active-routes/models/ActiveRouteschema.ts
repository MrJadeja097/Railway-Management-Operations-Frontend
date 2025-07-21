import { z } from "zod";

export const ActiveRouteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  startStation: z.number().int().positive("Start Station ID must be positive"),
  endStation: z.number().int().positive("End Station ID must be positive"),
  total_length: z.number().positive("Total length must be positive"),
  total_time: z.number().positive("Total time must be positive"),
  stations_included: z.array(z.number().int().positive("Station IDs must be positive")).min(1, "At least one station must be included"),
  driver: z.number().int().positive("Driver ID must be positive"),
  back_guard: z.number().int().positive("Back guard ID must be positive"),
  trainId: z.number().int().positive("Train ID must be positive"),
  railLineId: z.number().int().positive("Rail Line ID must be positive"),
});

export type ActiveRouteFormData = z.infer<typeof ActiveRouteSchema>;
