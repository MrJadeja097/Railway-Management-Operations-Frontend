import { useCallback } from "react";
import { toast } from "react-toastify";

export function useConfirmDelete<TId>(
  deleteFn: (id: TId) => Promise<void>,
  entityName: string,
  onDeleted: () => void
) {
  return useCallback(
    async (id: TId) => {
      if (confirm(`Are you sure you want to delete this ${entityName}?`)) {
        try {
        const response = deleteFn(id);
        toast.promise(response ,{
          pending: `Deleting ${entityName} ...`,
          success: `${entityName} deleted successfully.`,
          error: `Failed to delete ${entityName}.`
        })
          onDeleted();
        } catch (error) {}
      }
    },
    [deleteFn, entityName, onDeleted]
  );
}
