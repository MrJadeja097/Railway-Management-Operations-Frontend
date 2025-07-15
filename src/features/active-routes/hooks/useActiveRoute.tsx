import { useEffect, useState } from "react";
import axios from "axios";
import apiHandler from "../../../api/handler";
import { getAllActiveRoutes } from "../../../api";

export interface Station {
  name: string;
  latitude: string;
  longitude: string;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export interface RailLine {
  name: string;
  description: string;
  totalLength: number;
}

export interface ActiveRoute {
  id: number;
  name: string;
  total_length: number;
  total_time: number;
  startStation: Station;
  endStation: Station;
  driver: Person;
  back_guard: Person;
  railLineId: RailLine;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useActiveRoutes = () => {
  const [routes, setRoutes] = useState<ActiveRoute[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getAllActiveRoutes()
        setRoutes(response);
      } catch (error) {
        console.error("Error fetching active routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { routes, loading };
};
