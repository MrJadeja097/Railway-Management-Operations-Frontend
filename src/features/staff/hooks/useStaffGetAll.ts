import { useState, useCallback, useEffect } from "react";
import { getAllStaff } from "../../../api";
import type { Staff } from "../models";

export const useStaffGetAll = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStaff = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllStaff()
      setStaff(data);
    } catch (error) {
      console.error("Failed to fetch staff:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStaff();
  }, [fetchStaff]);

  return { staff, loading, fetchStaff };
};
