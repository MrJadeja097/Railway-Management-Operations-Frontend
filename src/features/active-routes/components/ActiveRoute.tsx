import React, { useState } from "react";
import { ActiveRouteCard } from "./ActiveRouteCard";
import { useFetchAll } from "../../../Hooks";
import type { ActiveRoute } from "../models";
import { getAllActiveRoutes } from "../../../api";
import { useAuth } from "../../auth/AuthProvider";
import { CreateActiveRouteForm } from "./CreateActiveRouteForm";

export const ActiveRoutes: React.FC = () => {
  const { token } = useAuth();

  const { data, loading, fetchAll } =
    useFetchAll<ActiveRoute>(getAllActiveRoutes);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<
    "NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC"
  >("NAME_ASC");

  const [showAddForm, setShowAddForm] = useState(false);

  const filteredRoutes = data
    .filter((route) => {
      const q = search.toLowerCase();
      return (
        route.name.toLowerCase().includes(q) ||
        route.driver?.firstName?.toLowerCase().includes(q) ||
        route.driver?.lastName?.toLowerCase().includes(q) ||
        route.back_guard?.firstName?.toLowerCase().includes(q) ||
        route.back_guard?.lastName?.toLowerCase().includes(q) ||
        route.startStation?.name?.toLowerCase().includes(q) ||
        route.endStation?.name?.toLowerCase().includes(q) ||
        route.trainId?.name?.toLowerCase().includes(q)
      );
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

  if (loading) {
    return (
      <div className="p-6 grid gap-6 bg-[#0a0f0f] min-h-screen text-[#d0dad8]">
        Loading active routes...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0f] to-[#0a0f0f] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-cyan-100 mb-2 drop-shadow-lg">
              Active Routes
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#276e5f] to-[#3da96e] shadow-lg shadow-[#5dc1b9]/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            {token && (
              <button
                className="px-4 py-2.5 rounded-lg bg-[#511D43] text-slate-100 text-sm font-medium hover:bg-[#6a2658] border border-[#511D43] hover:border-[#D946EF] transition-all duration-300 shadow hover:shadow-[#D946EF]/40 cursor-pointer"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? "Close" : "+ Add Active Route"}
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-lg bg-[#122222] text-[#d0dad8] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da96e]"
            >
              <option value="NAME_ASC">Name ↑</option>
              <option value="NAME_DESC">Name ↓</option>
              <option value="ID_ASC">ID ↑</option>
              <option value="ID_DESC">ID ↓</option>
            </select>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search routes..."
              className="px-4 py-2 rounded-lg bg-[#122222] text-[#d0dad8] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da96e]"
            />
          </div>
        </div>

        {showAddForm && (
          <div className="mb-8 flex justify-center">
            <CreateActiveRouteForm onCreated={fetchAll} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route) => (
              <ActiveRouteCard key={route.id} route={route} />
            ))
          ) : (
            <p className="text-slate-400">No active routes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
