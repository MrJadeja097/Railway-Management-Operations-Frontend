import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { AssignRoleSchema, type AssignRoleFormData } from "../models";
import { assignRole } from "../../../api";
import { toast } from "react-toastify";

interface Props {
  staffId: number;
  onClose: () => void;
  onRoleChanged: () => void;
}

export const AssignRoleForm: React.FC<Props> = ({ staffId, onClose, onRoleChanged }) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(AssignRoleSchema),
      defaultValues:{
        staffId:staffId
      }
    });

    const assign = async(data: AssignRoleFormData) => {
        const response = assignRole(data)
        toast.promise(response ,{
                pending: `Updating role to ${data.role}...`,
                success: `Role updated to ${data.role}`,
                error: `Failed to update role.`,
                })
        await response;
        reset()
        onRoleChanged();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit((data: AssignRoleFormData) => {
            assign(data)
        })}
        className="bg-slate-800 border border-slate-600 p-6 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-lg font-semibold text-white mb-4">Assign Role</h2>
        <div>
            <input
                {...register("role")}
            className="w-full px-3 py-2 mb-4 rounded bg-slate-700 text-white"
            />
            {errors.role && (
            <p className="text-red-400 text-xs">{errors.role.message}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-1.5 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
