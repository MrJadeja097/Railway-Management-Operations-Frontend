import { useState, useEffect } from "react";
import type { Station } from "../models";
import { getAllStation } from "../../../api";

export const useStationGetAll = () => {
  const [station, setStation] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getAllStation()
        setStation(response);
      } catch (error) {
        console.error("Error fetching active routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { station, loading };
};