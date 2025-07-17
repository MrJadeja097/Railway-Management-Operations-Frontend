import { useCallback } from "react";
import { createStaff } from "../../../api";

interface CreateStaffPayload {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  Address: string;
  city: string;
  role: string;
}

export const useCreateStaff = () => {
  return useCallback(async (payload: CreateStaffPayload) => {
    const newStaff = await createStaff(payload);
    return newStaff;
  }, []);
};
