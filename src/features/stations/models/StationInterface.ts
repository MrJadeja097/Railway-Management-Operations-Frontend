import type { RailLine } from "../../rail-lines/models";

export interface Station {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  railLine: RailLine;
}