import { useCallback } from "react";
import { toast } from "react-toastify";

export function useCreate<TPayload>(
  createFn: (data: TPayload) => Promise<unknown>,
  entityName: string,
  onCreated: () => void
) {
  return useCallback(
    async (data: TPayload, reset?: () => void) => {
      try {
        await createFn(data);
        toast.success(`${entityName} created successfully.`);
        if (reset) reset();
        onCreated();
      } catch (error) {
        console.error(`Error creating ${entityName}:`, error);
        toast.error(`Failed to create ${entityName}.`);
      }
    },
    [createFn, entityName, onCreated]
  );
}
