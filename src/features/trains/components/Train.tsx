import React, { useState } from "react";
import { useTrainGetAll } from "../hooks";
import { TrainCard } from "./TrainCard";
import { TrainStatuses, type TrainStatus } from "../models";


export const TrainComponent: React.FC = () => {
  const { trains, loading } = useTrainGetAll();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TrainStatus | "ALL">("ALL");

  const filteredTrains = trains.filter((train) => {
    const query = search.toLowerCase();

    const matchesText =
      train.name.toLowerCase().includes(query) ||
      train.description.toLowerCase().includes(query) ||
      train.status.toLowerCase().includes(query) ||
      train.id.toString().includes(query) ||
      train.total_coaches.toString().includes(query) ||
      train.top_speed.toString().includes(query);

    const matchesStatus =
      statusFilter === "ALL" || train.status === statusFilter;

    return matchesText && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        Loading Train Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-indigo-100 mb-2 drop-shadow-lg">
              Trains
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
           <select
  value={statusFilter}
  onChange={(e) =>
    setStatusFilter(
      e.target.value === "ALL"
        ? "ALL"
        : (e.target.value as TrainStatus)
    )
  }
  className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
>
  <option value="ALL">All</option>
  {TrainStatuses.map((status) => (
    <option key={status} value={status}>
      {status.replaceAll("_", " ")}
    </option>
  ))}
</select>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Trains..."
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrains.length > 0 ? (
            filteredTrains.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))
          ) : (
            <p className="text-slate-400">No trains match your filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};
