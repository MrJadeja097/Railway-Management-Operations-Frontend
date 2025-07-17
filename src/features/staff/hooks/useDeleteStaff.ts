import { useCallback } from "react";
import {  deleteStaff } from "../../../api";
import { toast } from "react-toastify";

export const useDeleteStaff = () => {
  return useCallback(async (id: number) => {
    try {
      await deleteStaff(id)
      toast.success("Staff deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete staff!");
    }
  }, []);
};
