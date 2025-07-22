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
          await deleteFn(id);
          toast.success(`${entityName} deleted successfully.`);
          onDeleted();
        } catch (error) {
          toast.error(`Failed to delete ${entityName}.`);
        }
      }
    },
    [deleteFn, entityName, onDeleted]
  );
}
