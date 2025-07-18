import { useState, useEffect, useCallback } from "react";
import type { Station } from "../models";
import { getAllStation } from "../../../api";

export const useStationGetAll = () => {
  const [station, setStation] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


    const fetchStation = useCallback( async () => {
      setLoading(true)
      try {
        const response = await getAllStation()
        setStation(response);
      } catch (error) {
        console.error("Error fetching station:", error);
      } finally {
        setLoading(false);
      }
    }, [])

  useEffect(() => {
    fetchStation();
  }, [fetchStation]);

  return { station, loading , fetchStation};
};