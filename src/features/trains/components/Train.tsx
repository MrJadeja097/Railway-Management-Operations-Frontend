import React, { useState } from "react";
import { TrainCard } from "./TrainCard";
import { TrainStatuses, type TrainStatus } from "../models";
import { CreateTrainForm } from "./CreateTrianForm";
import { useAuth } from "../../auth/AuthProvider";
import { getAllTrain } from "../../../api";
import { useQuery } from "@tanstack/react-query";

export const TrainComponent: React.FC = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["train"],
    queryFn: getAllTrain,
    staleTime: 15 * 60 *1000 ,
  });

  const { token } = useAuth();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TrainStatus | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<
    "NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC"
  >("NAME_ASC");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredTrains = React.useMemo(() => {
    if (!isLoading && data) {
      return data.filter((train) => {
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
        })
        .sort((a, b) => {
          switch (sortBy) {
            case "NAME_ASC":
              return a.name.localeCompare(b.name);
            case "NAME_DESC":
              return b.name.localeCompare(a.name);
            case "ID_ASC":
              return a.id - b.id;
            case "ID_DESC":
              return b.id - a.id;
            default:
              return 0;
          }
        });
    } else {
      return [];
    }
  }, [data, isLoading, search, sortBy, statusFilter]);

  if (isLoading) {
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
              Trains Directory
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            {token && (
              <button
                className="px-4 py-2.5 rounded-lg bg-[#511D43] text-slate-100 text-sm font-medium hover:bg-[#6a2658] border border-[#511D43] hover:border-[#D946EF] transition-all duration-300 shadow hover:shadow-[#D946EF]/40 cursor-pointer"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? "Close" : "+ Add Train"}
              </button>
            )}

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="NAME_ASC">Name ↑</option>
              <option value="NAME_DESC">Name ↓</option>
              <option value="ID_ASC">ID ↑</option>
              <option value="ID_DESC">ID ↓</option>
            </select>
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

        {showAddForm && (
          <div className="mb-8 flex justify-center">
            <CreateTrainForm onCreated={refetch} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrains.length > 0 ? (
            filteredTrains.map((train) => (
              <TrainCard
                key={train.id}
                train={train}
                onDeleted={refetch}
                onUpdated={refetch}
              />
            ))
          ) : (
            <p className="text-slate-400">No trains found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
