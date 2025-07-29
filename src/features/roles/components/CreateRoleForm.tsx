import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoleSchema, type RoleFormData } from "../models";
import { useCreate } from "../../../Hooks";
import { createRole } from "../../../api";

interface Props {
  onCreated: () => void;
}

export const CreateRoleForm: React.FC<Props> = ({ onCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RoleSchema),
  });

  const create = useCreate(createRole, "Role", onCreated);

  return (
    <form
      onSubmit={handleSubmit(async (data: RoleFormData) => {
        await create(data, reset);
      })}
      className="space-y-4 bg-slate-800/60 p-4 rounded-xl"
    >
      <div>
        <label className="block mb-1 text-sm text-slate-300">Name</label>
        <input
          {...register("name")}
          className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.name && (
          <p className="text-red-400 text-xs">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm text-slate-300">Description</label>
        <input
          {...register("description")}
          className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.description && (
          <p className="text-red-400 text-xs">{errors.description.message}</p>
        )}
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-700 hover:border-purple-400 transition-all duration-300 shadow hover:shadow-indigo-400/40"
        >
          Create Role
        </button>
      </div>
    </form>
  );
};
