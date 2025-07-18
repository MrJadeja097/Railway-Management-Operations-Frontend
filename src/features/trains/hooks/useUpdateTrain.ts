import { useCallback } from "react";
import type { Train } from "../models";
import { updateTrain } from "../../../api";

export const useUpdateTrain = (refetch: () => void) => {
  return useCallback(async (id: number, data: Partial<Train>) => {
    const updatedTrain : Train = await updateTrain(id, data)
    refetch()
    return updatedTrain;
  }, [refetch]);
};