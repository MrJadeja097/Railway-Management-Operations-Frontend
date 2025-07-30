import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PermissionSchema, type PermissionFormData } from "../models";
import { removePermission } from "../../../api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../main";
import { toast } from "react-toastify";

interface Props {
  roleId: number;
  setShowRemoveModal: (setModel: boolean) => void;
}

export const RemovePermissionForm: React.FC<Props> = ({roleId, setShowRemoveModal}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PermissionSchema),
    defaultValues:{
      roleId:roleId
    }
  });

  const remove = async(data: PermissionFormData) => {
    const response = removePermission(data)
    toast.promise(response ,{
              pending: `Removeing ${data.permissionName} to this role...`,
              success: `${data.permissionName} is removed from this role.`,
              error: `Failed to remove ${data.permissionName} permission.`
            })
    await response;
  }
  const mutation = useMutation({
      mutationFn:async (data: PermissionFormData) => await remove(data),
    onSuccess: async () => {
      reset()
      await queryClient.invalidateQueries({ queryKey: ["permissions", roleId] });
    }
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <form className="bg-slate-900 border border-slate-600 rounded-2xl p-6 w-[90%] max-w-md shadow-lg backdrop-blur-md" 
        onSubmit={handleSubmit(async (data: PermissionFormData) => {
                mutation.mutate(data);
              })} >
        <h3 className="text-lg font-semibold text-white mb-4">
          Remove Permission
        </h3>
        <div>
          <input
            {...register("permissionName")}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.permissionName && (
            <p className="text-red-400 text-xs">{errors.permissionName.message}</p>
          )}
        </div>

        <div className="flex mt-3 justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              reset();
              setShowRemoveModal(false);
            }}
            className="px-4 py-1.5 text-sm rounded bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1.5 text-sm rounded bg-green-600 text-white hover:bg-green-500 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
