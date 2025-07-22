
export const TrainStatuses = [
  "ACTIVE",
  "GROUNDED",
  "UNDER_MAINTENANCE",
  "ON_ACTIVEROUTE",
] as const;

export type TrainStatus = typeof TrainStatuses[number];

export interface Train {
  id: number;
  name: string;
  description: string;
  status: TrainStatus;
  total_coaches: number;
  top_speed: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}