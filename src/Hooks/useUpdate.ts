import { useCallback } from "react";
import { toast } from "react-toastify";

export function useUpdate<TPayload, TPayloadResponse = TPayload>(
  updateFn: (id: number, data: TPayload) => Promise<TPayloadResponse>,
  entityName: string,
  onUpdated: () => void
) {
  return useCallback(
    async (id: number, data: TPayload) => {
      try {
        const response = updateFn(id, data);
        toast.promise(response ,{
          pending: `Updating ${entityName} ...`,
          success: `${entityName} updated successfully.`,
          error: `Failed to update ${entityName}.`
        })
        onUpdated();
      } catch (error) {}
    },
    [updateFn, entityName, onUpdated]
  );
}
