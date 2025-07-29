import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StationSchema, type StationFormData, type Station } from "../models";

interface Props {
  station: Station;
  onSubmit: (data: StationFormData) => void;
  onCancel: () => void;
}

export const UpdateStationForm: React.FC<Props> = ({station,onSubmit,onCancel}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StationSchema),
    defaultValues: {
      name: station.name,
      latitude: +station.latitude,
      longitude: +station.longitude,
      rail_line_id: station.railLine.id,
    },
  });

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
            {...register("rail_line_id", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.rail_line_id && (
            <p className="text-red-400 text-xs">{errors.rail_line_id.message}</p>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700 border border-yellow-600 hover:border-yellow-400 transition-all duration-300 shadow hover:shadow-yellow-400/40"
        >
          Update Station
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-4 px-4 py-2 rounded bg-slate-600 text-white hover:bg-slate-700 border border-slate-600 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
