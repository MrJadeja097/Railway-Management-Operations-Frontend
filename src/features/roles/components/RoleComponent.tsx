import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllRoles } from "../../../api";
import { RoleCard } from "./RoleCard";
import { CreateRoleForm } from "./CreateRoleForm";

export const RoleComponent: React.FC = () => {
  const { data, isLoading , refetch} = useQuery({
    queryKey: ["roles"],
    queryFn: getAllRoles,
    staleTime: 15 * 60 * 1000,
  });
  const { token, role } = useAuth();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<
    "NAME_ASC" | "NAME_DESC" | "ID_ASC" | "ID_DESC"
  >("NAME_ASC");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredRoles = React.useMemo(() => {
    if (!isLoading && data) {
      return data
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
    } else {
      return [];
    }
  }, [data, isLoading, search, sortBy]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        Loading Role Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-indigo-100 mb-2 drop-shadow-lg">
              Roles Directory
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-amber-400 shadow-lg shadow-indigo-400/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
            {token && role == "Super Admin" && (
              <button
                className="px-4 py-2.5 rounded-lg bg-[#2D2940] text-slate-100 text-sm font-medium hover:bg-[#433C66] border border-[#2D2940] hover:border-indigo-400 transition-all duration-300 shadow hover:shadow-indigo-400/40 cursor-pointer"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? "Close" : "+ Add Role"}
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
              placeholder="Search Roles..."
              className="px-4 py-2 rounded-lg bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {showAddForm && (
          <div className="mb-8 flex justify-center">
            <CreateRoleForm onCreated={refetch} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => <RoleCard key={role.id} roles={role} onDeleted={refetch}/>)
          ) : (
            <p className="text-slate-400">No roles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
