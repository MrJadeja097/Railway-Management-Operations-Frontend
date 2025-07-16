import { useEffect, useState } from "react";
import { getAllRailLine } from "../../../api/RailLineApi";
import type { RailLine } from "../models";

export const useRailLineGetAll = () => {
  const [railLine, setRailLine] = useState<RailLine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getAllRailLine()
        setRailLine(response);
      } catch (error) {
        console.error("Error fetching Rail Lines:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { railLine, loading };
};