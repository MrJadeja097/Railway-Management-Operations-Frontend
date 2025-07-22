import type { Station } from "../../stations/models";

export interface RailLine {
  id: number;
  name: string;
  description: string;
  startStation: Station;
  endStation: Station;
  totalLength: number;
  totalStations: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}