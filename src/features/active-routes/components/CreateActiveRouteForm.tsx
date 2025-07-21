import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ActiveRoute,
  type ActiveRouteFormData,
  ActiveRouteSchema,
} from "../models";
import { useCreate } from "../../../Hooks";
import { createActieveRoute } from "../../../api";

interface Props {
  onCreated: () => void;
}

export const CreateActiveRouteForm: React.FC<Props> = ({ onCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ActiveRouteFormData>({
    resolver: zodResolver(ActiveRouteSchema),
  });

  const create = useCreate<ActiveRouteFormData>(
    createActieveRoute,
    "Active Route",
    onCreated
  );

  return (
    <form
      onSubmit={handleSubmit(async (data: ActiveRouteFormData) => {
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Start Station ID
          </label>
          <input
            type="number"
            {...register("startStation", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.startStation && (
            <p className="text-red-400 text-xs">
              {errors.startStation.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            End Station ID
          </label>
          <input
            type="number"
            {...register("endStation", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.endStation && (
            <p className="text-red-400 text-xs">{errors.endStation.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Total Length
          </label>
          <input
            type="number"
            {...register("total_length", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.total_length && (
            <p className="text-red-400 text-xs">
              {errors.total_length.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Total Time
          </label>
          <input
            type="number"
            {...register("total_time", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.total_time && (
            <p className="text-red-400 text-xs">{errors.total_time.message}</p>
          )}
        </div>

        {/* <div>
          <label className="block mb-1 text-sm text-slate-300">
            Stations Included (comma-separated IDs)
          </label>
          <input
            type="text"
            {...register("stations_included", {
              setValueAs: (v) =>
                v
                  .split(",")
                  .map((id: string) => parseInt(id.trim(), 10))
                  .filter((n: number) => !isNaN(n)),
            })}
            placeholder="1,2,3"
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.stations_included && (
            <p className="text-red-400 text-xs">
              {errors.stations_included.message}
            </p>
          )}
        </div> */}

        <div>
          <label className="block mb-1 text-sm text-slate-300">Driver ID</label>
          <input
            type="number"
            {...register("driver", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.driver && (
            <p className="text-red-400 text-xs">{errors.driver.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Back Guard ID
          </label>
          <input
            type="number"
            {...register("back_guard", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.back_guard && (
            <p className="text-red-400 text-xs">{errors.back_guard.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">Train ID</label>
          <input
            type="number"
            {...register("trainId", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.trainId && (
            <p className="text-red-400 text-xs">{errors.trainId.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-slate-300">
            Rail Line ID
          </label>
          <input
            type="number"
            {...register("railLineId", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-slate-700 text-slate-100"
          />
          {errors.railLineId && (
            <p className="text-red-400 text-xs">{errors.railLineId.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-700 hover:border-purple-400 transition-all duration-300 shadow hover:shadow-indigo-400/40"
      >
        Create Active Route
      </button>
    </form>
  );
};
