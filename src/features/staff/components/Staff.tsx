import React, { useState } from "react";
import { StaffCard } from "./StaffCard";
import { AddStaffForm } from "./AddStaffForm";
import { getAllStaff } from "../../../api";
import { useQuery } from "@tanstack/react-query";

export const StaffComponent: React.FC = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["staff"],
    queryFn: getAllStaff,
    staleTime: 15 * 60 *1000 ,
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<
    "NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC"
  >("NAME_ASC");
  const [showAddForm, setShowAddForm] = useState(false);

  
  
  const filteredStaff = React.useMemo(() => {
  if (!isLoading && data) {
    return data.filter(person => {
      const q = search.toLowerCase();
      return (
        person.firstName.toLowerCase().includes(q) ||
        person.lastName.toLowerCase().includes(q) ||
        person.city?.toLowerCase().includes(q) ||
        person.role?.name?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "NAME_ASC":
          return a.firstName.localeCompare(b.firstName);
        case "NAME_DESC":
          return b.firstName.localeCompare(a.firstName);
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
}, [search, sortBy, data, isLoading]);


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        Loading Staff Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-cyan-100 mb-2 drop-shadow-lg">
              Staff Directory
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            <button
              className="px-4 py-2.5 rounded-lg bg-[#511D43] text-slate-100 text-sm font-medium hover:bg-[#6a2658] border border-[#511D43] hover:border-[#D946EF] transition-all duration-300 shadow hover:shadow-[#D946EF]/40 cursor-pointer"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? "Close" : "+ Add Staff"}
            </button>

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

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search staff..."
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {showAddForm && (
          <div className="mb-8 flex justify-center">
            <AddStaffForm onCreated={refetch} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.length > 0 ? (
            filteredStaff.map((person) => (
              <StaffCard key={person.id} person={person} onDeleted={refetch} onRoleChanged={refetch}/>
            ))
          ) : (
            <p className="text-slate-400">No staff found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
