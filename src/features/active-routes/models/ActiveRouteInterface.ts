import type { RailLine } from "../../rail-lines/models";
import type { Staff } from "../../staff/models";
import type { Station } from "../../stations/models";
import type { Train } from "../../trains/models";

export interface ActiveRoute {
  id: number;
  name: string;
  total_length: number;
  total_time: number;
  startStation: Station;
  endStation: Station;
  driver: Staff;
  back_guard: Staff;
  railLineId: RailLine;
  trainId: Train;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
