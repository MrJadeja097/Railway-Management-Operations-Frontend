import { useState, useEffect } from "react";
import type { Staff } from "../models";
import { getAllStaff } from "../../../api";

export const useStaffGetAll = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getAllStaff()
        setStaff(response);
      } catch (error) {
        console.error("Error fetching active routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { staff, loading };
};