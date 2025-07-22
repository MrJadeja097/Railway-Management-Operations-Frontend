import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RailLineUpdateSchema, type RailLine, type RailLineUpdateFormData } from "../models";

interface Props {
  railLine:RailLine;
    onSubmit: (data: RailLineUpdateFormData) => void;
  onCancel: () => void;
}

export const UpdateRailLineForm: React.FC<Props> = ({ railLine, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RailLineUpdateFormData>({
    resolver: zodResolver(RailLineUpdateSchema),
    defaultValues: {
      name: railLine.name,
      description: railLine.description,
      startStation: railLine.startStation.id,
      endStation: railLine.endStation.id,
      totalLength: railLine.totalLength,
    },
  });

 return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-slate-800/60 rounded-xl">
      <h2 className="text-xl text-slate-100">Update Rail Line</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-slate-300">Name</label>
          <input
            {...register("name")}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Total Length (KM)</label>
          <input
            type="number"
            {...register("totalLength", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.totalLength && <p className="text-red-400 text-xs">{errors.totalLength.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Start Station ID</label>
          <input
            type="number"
            {...register("startStation", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.startStation && <p className="text-red-400 text-xs">{errors.startStation.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">End Station ID</label>
          <input
            type="number"
            {...register("endStation", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.endStation && <p className="text-red-400 text-xs">{errors.endStation.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 text-sm text-slate-300">Description</label>
          <textarea
            {...register("description")}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.description && <p className="text-red-400 text-xs">{errors.description.message}</p>}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 transition-all duration-300"
        >
          Update Rail Line
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 rounded bg-slate-600 text-white hover:bg-slate-700 border border-slate-600 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
