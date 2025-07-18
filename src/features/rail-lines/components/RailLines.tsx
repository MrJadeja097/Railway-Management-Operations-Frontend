import React, { useState } from "react";
import { RailLineCard } from "./RailLineCard";
import { useFetchAll } from "../../../Hooks";
import type { RailLine } from "../models";
import { getAllRailLine } from "../../../api";

export const RailLineComponent: React.FC = () => {
  const { data, loading, fetchAll } = useFetchAll<RailLine>(getAllRailLine);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC">("NAME_ASC");

  const filteredRailLines = data
    .filter((line) => {
      const q = search.toLowerCase();
      return (
        line.name.toLowerCase().includes(q) ||
        line.startStation?.name.toLowerCase().includes(q) ||
        line.endStation?.name.toLowerCase().includes(q)
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        Loading Rail Line Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-yellow-100 mb-2 drop-shadow-lg">
              Rail Lines
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30"></div>
          </div>


          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              placeholder="Search rail lines..."
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {loading && (
          <p className="text-slate-300">Loading rail lines...</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRailLines.length > 0 ? (
            filteredRailLines.map((line) => (
              <RailLineCard key={line.id} railLine={line} />
            ))
          ) : (
            <p className="text-slate-400">No rail lines found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
