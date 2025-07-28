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
        const response = createFn(data);
        toast.promise(response ,{
          pending: `Creating ${entityName} ...`,
          success: `${entityName} created successfully.`,
          error: `Failed to create ${entityName}.`
        })
        await response;
        if (reset) reset();
        onCreated();
      } catch (error) {}
    },
    [createFn, entityName, onCreated]
  );
}
