import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { TrainSchema, type TrainFormData } from "../models";
import { useCreateTrain } from "../hooks/useCreateTrain";

interface Props {
  onCreated: () => void;
}

export const CreateTrainForm: React.FC<Props> = ({ onCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrainFormData>({
    resolver: zodResolver(TrainSchema),
  });

  const createTrain = useCreateTrain(onCreated);

  const onSubmit = async (data: TrainFormData) => {
    try {
      await createTrain(data);
      toast.success("Train created successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create train.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700/50 shadow-lg min-w-xl mx-auto"
    >
      <h2 className="text-xl text-indigo-100 mb-4">Add New Train</h2>
      <div className="mb-4">
        <label className="block text-slate-200 mb-1">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-slate-200 mb-1">Description</label>
        <input
          {...register("description")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.description && (
          <p className="text-red-400 text-sm">{errors.description.message}</p>
        )}
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

      <div className="mb-4">
        <label className="block text-slate-200 mb-1">Total Coaches</label>
        <input
          type="number"
          {...register("total_coaches", { valueAsNumber: true })}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.total_coaches && (
          <p className="text-red-400 text-sm">{errors.total_coaches.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-slate-200 mb-1">Top Speed</label>
        <input
          type="number"
          {...register("top_speed", { valueAsNumber: true })}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.top_speed && (
          <p className="text-red-400 text-sm">{errors.top_speed.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-700 hover:border-purple-400 transition-all duration-300 shadow hover:shadow-indigo-400/40"
      >
        Create Train
      </button>
    </form>
  );
};
