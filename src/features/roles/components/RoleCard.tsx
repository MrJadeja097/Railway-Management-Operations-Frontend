import React from "react";
import type { Roles } from "../../../api";

interface RoleCardProps {
  role: Roles;
  onViewPermissions?: () => void;
  onAddPermission?: () => void;
  onRemovePermission?: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({
  role,
  onViewPermissions,
  onAddPermission,
  onRemovePermission,
}) => {
  return (
    <div className="relative group bg-gradient-to-br from-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-rose-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-rose-600/40 p-6">
      <div className="absolute top-4 right-4 w-16 h-14 flex items-center justify-center bg-gradient-to-br from-slate-800/70 to-slate-700/80 backdrop-blur-sm rounded-xl border border-rose-900/40 text-rose-300 text-base font-semibold group-hover:from-rose-700/10 group-hover:border-rose-600/40 transition-all duration-300">
        <span className="ml-1 text-lg">ID: {role.id}</span>
      </div>

      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-rose-300 leading-tight tracking-wide drop-shadow-md">
            {role.name}
          </h2>
        </div>
      </div>

      <p className="text-rose-200 mb-4 text-sm leading-relaxed">
        📝 {role.description}
      </p>

      <div className="pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400">
        <span>
          Created{" "}
          {new Date(role.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 items-center justify-start">
        <button
          onClick={onViewPermissions}
          className="px-4 py-2 rounded-lg text-sm text-white font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#6366f1] border border-indigo-500/30"
        >
          🔎 Reveal Abilities
        </button>

        <button
          onClick={onAddPermission}
          className="px-4 py-2 rounded-lg text-sm text-white font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#22c55e] border border-green-500/30"
        >
          ➕ Empower Role
        </button>

        <button
          onClick={onRemovePermission}
          className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#f43f5e] border border-rose-500/30"
        >
          ❌ Revoke Access
        </button>
      </div>
    </div>
  );
};
