import { useCallback } from "react";
import type { Station, StationFormData,  } from "../models";
import { createStation } from "../../../api";

export const useCreateStation = (refetch: () => void) => {
  return useCallback(
    async (payload: StationFormData) => {
      console.log("insode hook");
      
      const newStation: Station = await createStation(payload);
      refetch(); 
      return newStation;
    },
    [refetch]
  );
};
