import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrainSchema, type Train, type TrainFormData } from "../models";

interface Props {
  train: Train;
  onSubmit: (data: TrainFormData) => void;
  onCancel: () => void;
}

export const TrainUpdateForm: React.FC<Props> = ({ train, onSubmit, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TrainFormData>({
    resolver: zodResolver(TrainSchema),
    defaultValues: {
      name: train.name,
      description: train.description,
      status: train.status,
      total_coaches: train.total_coaches,
      top_speed: train.top_speed,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm text-slate-300">Name</label>
        <input {...register("name")} className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100" />
        {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm text-slate-300">Description</label>
        <textarea {...register("description")} className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100" />
      </div>

      <div className="mb-4">
        <label className="block text-slate-200 mb-1">Status</label>
        <select
          {...register("status")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        >
          <option value="">Select status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="GROUNDED">GROUNDED</option>
          <option value="UNDER_MAINTENANCE">UNDER MAINTENANCE</option>
          <option value="ON_ACTIVEROUTE">ON ACTIVE ROUTE</option>
        </select>
        {errors.status && (
          <p className="text-red-400 text-sm">{errors.status.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-slate-300">Coaches</label>
          <input type="number" {...register("total_coaches", { valueAsNumber: true })} className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100" />
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Top Speed</label>
          <input type="number" {...register("top_speed", { valueAsNumber: true })} className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100" />
        </div>
      </div>

      <div className="flex space-x-2">
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600">Cancel</button>
      </div>
    </form>
  );
};
