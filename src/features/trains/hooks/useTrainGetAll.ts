import { useState, useEffect, useCallback } from "react";
import type { Train } from "../models";
import { getAllTrain } from "../../../api";

export const useTrainGetAll = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTrain = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllTrain();
      setTrains(data);
    } catch (error) {
      console.error("Failed to fetch train:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrain();
  }, [fetchTrain]);

  return { trains, loading, fetchTrain };
};
