import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RailLineSchema, type RailLineFormData } from "../models";
import { useCreate } from "../../../Hooks";
import { createRailLine } from "../../../api";

export const CreateRailLineForm: React.FC<{ onCreated: () => void }> = ({ onCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RailLineFormData>({
    resolver: zodResolver(RailLineSchema),
  });

  const create = useCreate(createRailLine, "Rail Line", onCreated);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await create(data, reset);
      })}
      className="space-y-6 p-6 bg-slate-800/60 rounded-xl"
    >
      <h2 className="text-xl text-slate-100">Create Rail Line</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rail Line Details Section */}
        <div className="space-y-4">
          <h3 className="text-slate-200">Rail Line Details</h3>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Rail Line Name</label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
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
        </div>

        {/* Start Station Section */}
        <div className="space-y-4">
          <h3 className="text-slate-200">Start Station</h3>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Name</label>
            <input
              {...register("startStation.name")}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.startStation?.name && (
              <p className="text-red-400 text-xs">{errors.startStation.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Latitude</label>
            <input
              type="number"
              step="any"
              {...register("startStation.latitude", { valueAsNumber: true })}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.startStation?.latitude && (
              <p className="text-red-400 text-xs">{errors.startStation.latitude.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Longitude</label>
            <input
              type="number"
              step="any"
              {...register("startStation.longitude", { valueAsNumber: true })}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.startStation?.longitude && (
              <p className="text-red-400 text-xs">{errors.startStation.longitude.message}</p>
            )}
          </div>
        </div>

        {/* End Station Section */}
        <div className="space-y-4">
          <h3 className="text-slate-200">End Station</h3>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Name</label>
            <input
              {...register("endStation.name")}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.endStation?.name && (
              <p className="text-red-400 text-xs">{errors.endStation.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Latitude</label>
            <input
              type="number"
              step="any"
              {...register("endStation.latitude", { valueAsNumber: true })}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.endStation?.latitude && (
              <p className="text-red-400 text-xs">{errors.endStation.latitude.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm text-slate-300">Longitude</label>
            <input
              type="number"
              step="any"
              {...register("endStation.longitude", { valueAsNumber: true })}
              className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
            />
            {errors.endStation?.longitude && (
              <p className="text-red-400 text-xs">{errors.endStation.longitude.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm text-slate-300">Total Length</label>
          <input
            type="number"
            {...register("totalLength", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.totalLength && (
            <p className="text-red-400 text-xs">{errors.totalLength.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Total Stations</label>
          <input
            type="number"
            {...register("totalStations", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.totalStations && (
            <p className="text-red-400 text-xs">{errors.totalStations.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 transition-all duration-300"
      >
        Create Rail Line
      </button>
    </form>
  );
};
