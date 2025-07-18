import { useCallback } from "react";
import { toast } from "react-toastify";
import { deleteTrain } from "../../../api";

export const useDeleteTrain = () => {
  return useCallback(async (id: number) => {
    try {
      await deleteTrain(id)
      toast.success("Train deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete train!");
    }
  }, []);
};
