import { z } from "zod";

export const RailLineSchema = z.object({
  name: z.string().min(1, "Rail Line name is required"),
  description: z.string().min(1, "Rail Line description is required"),
  startStation: z.object({
    name: z.string().min(1, "Name is required"),
    latitude: z
      .number()
      .min(-90, "Lattitude is Invalid")
      .max(90, "Lattitude is Invalid"),
    longitude: z
      .number()
      .min(-180, "Longitude is Invalid")
      .max(180, "Longitude is Invalid"),
  }),
  endStation: z.object({
    name: z.string().min(1, "Name is required"),
    latitude: z
      .number()
      .min(-90, "Lattitude is Invalid")
      .max(90, "Lattitude is Invalid"),
    longitude: z
      .number()
      .min(-180, "Longitude is Invalid")
      .max(180, "Longitude is Invalid"),
  }),
  totalLength: z.number().int().positive("Total length should be positive"),
  totalStations: z.number().int().positive("Total stations shoulb ")
});

export type RailLineFormData = z.infer<typeof RailLineSchema>;
