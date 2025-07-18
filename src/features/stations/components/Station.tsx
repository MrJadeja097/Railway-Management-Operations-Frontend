import React, { useState } from "react";
import { useStationGetAll } from "../hooks";
import StationCard from "./StationCard";
import { useAuth } from "../../auth/AuthProvider";
import { CreateStationForm } from "./CreateStationForm";

export const StationComponent: React.FC = () => {
    const { token } = useAuth();

  const { station, loading, fetchStation } = useStationGetAll();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<
    "NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC"
  >("NAME_ASC");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredStations = station
    .filter((st) => {
      const q = search.toLowerCase();
      return st.name.toLowerCase().includes(q);
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
        Loading Station Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-fuchsia-100 mb-2 drop-shadow-lg">
              Stations Directory
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-fuchsia-400 to-pink-500 shadow-lg shadow-fuchsia-400/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            {token && (
              <button
                className="px-4 py-2.5 rounded-lg bg-[#511D43] text-slate-100 text-sm font-medium hover:bg-[#6a2658] border border-[#511D43] hover:border-[#D946EF] transition-all duration-300 shadow hover:shadow-[#D946EF]/40 cursor-pointer"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? "Close" : "+ Add Station"}
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              placeholder="Search Stations..."
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {showAddForm && (
                  <div className="mb-8 flex justify-center">
                    <CreateStationForm onCreated={fetchStation} />                  </div>
                )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStations.length > 0 ? (
            filteredStations.map((st) => (
              <StationCard key={st.id} station={st} />
            ))
          ) : (
            <p className="text-slate-400">No stations found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
