import { useEffect, useState } from "react";
import { getAllActiveRoutes } from "../../../api";
import type { ActiveRoute } from "../models";

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
