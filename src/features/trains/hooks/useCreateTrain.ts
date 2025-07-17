import { useCallback } from "react";
import type { TrainFormData, Train } from "../models";
import { createTrain } from "../../../api";

export const useCreateTrain = (refetch: () => void) => {
  return useCallback(
    async (payload: TrainFormData) => {
      const newTrain: Train = await createTrain(payload);
      refetch(); 
      return newTrain;
    },
    [refetch]
  );
};
