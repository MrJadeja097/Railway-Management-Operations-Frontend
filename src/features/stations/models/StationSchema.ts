import { z } from "zod";

export const StationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  latitude: z.number().min(-90, "Lattitude is Invalid").max(90, "Lattitude is Invalid"),
  longitude: z.number().min(-180, "Longitude is Invalid").max(180, "Longitude is Invalid"),
  railLine: z.coerce.number().min(1, "Rail Line Id is required."),
});

export type StationFormData = z.infer<typeof StationSchema>;
