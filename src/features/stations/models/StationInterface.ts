import type { RailLine } from "../../rail-lines/models";

export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  railLine: RailLine;
}