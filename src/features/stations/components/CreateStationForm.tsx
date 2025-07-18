import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateStation } from "../hooks";
import { StationSchema, type StationFormData } from "../models";
import { toast } from "react-toastify";

interface Props {
  onCreated: () => void;
}

export const CreateStationForm: React.FC<Props> = ({ onCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StationSchema),
  });

  const createStation = useCreateStation(onCreated);

  const onSubmit = async (data: StationFormData) => {
    try {
      console.log("Going in hook");
      await createStation(data);
      toast.success("Station created successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create station.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-slate-300">Latitude</label>
          <input
            type="number"
            step="any"
            {...register("latitude", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.latitude && (
            <p className="text-red-400 text-xs">{errors.latitude.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">Longitude</label>
          <input
            type="number"
            step="any"
            {...register("longitude", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.longitude && (
            <p className="text-red-400 text-xs">{errors.longitude.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Rail-Line Id
          </label>
          <input
            type="number"
            {...register("railLine", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.railLine && (
            <p className="text-red-400 text-xs">{errors.railLine.message}</p>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-700 hover:border-purple-400 transition-all duration-300 shadow hover:shadow-indigo-400/40"
        >
          Create Station
        </button>
      </div>
    </form>
  );
};
