import { useState, useEffect } from "react";
import type { Train } from "../models";
import { getAllTrain } from "../../../api";

export const useTrainGetAll = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getAllTrain()
        setTrains(response);
      } catch (error) {
        console.error("Error fetching Trains :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { trains, loading };
};