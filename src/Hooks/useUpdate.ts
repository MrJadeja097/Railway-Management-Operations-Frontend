import { useCallback } from "react";
import { toast } from "react-toastify";

export function useUpdate< TPayload>(
  updateFn: (id: number, data: TPayload) => Promise<TPayload>,
  entityName: string,
  onUpdated: () => void
) {
  return useCallback(
    async (id: number, data: TPayload) => {
      try {
        await updateFn(id, data);
        toast.success(`${entityName} updated successfully.`);
        onUpdated();
      } catch (error) {
        console.error(`Error updating ${entityName}:`, error);
        toast.error(`Failed to update ${entityName}.`);
      }
    },
    [updateFn, entityName, onUpdated]
  );
}
