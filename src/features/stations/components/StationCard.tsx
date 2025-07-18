import React from "react";
import type { Station } from "../models";
import { useConfirmDelete } from "../../../Hooks";
import { deleteStation } from "../../../api";
import { useAuth } from "../../auth/AuthProvider";
import { DeleteButton } from "../../../components/Buttons/Delete";

interface Props {
  station: Station;
  onDeleted: () => void;
}

const StationCard: React.FC<Props> = ({ station, onDeleted }) => {
  const { token } = useAuth();
  const confirmDelete = useConfirmDelete(deleteStation, "Station", onDeleted);

 return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-fuchsia-500/30">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:from-fuchsia-500/20 group-hover:to-pink-500/20 transition-all duration-300 border border-slate-600/50 group-hover:border-fuchsia-400/30">
            🚉
          </div>
          <div>
            <h2 className="text-xl font-medium text-slate-100 leading-tight">
              {station.name}
            </h2>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-slate-300">
            <span className="mr-2">📍</span>
            <span className="text-slate-400">Latitude:</span>
            <span className="ml-2 text-slate-200">{station.latitude}</span>
          </div>
          <div className="flex items-center text-slate-300">
            <span className="mr-2">📍</span>
            <span className="text-slate-400">Longitude:</span>
            <span className="ml-2 text-slate-200">{station.longitude}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-700/50 text-sm mb-2">
          <p className="text-slate-400 mb-1">🚆 Rail Line</p>
          <div className="text-slate-200">
            ID: {station.railLine.id} — {station.railLine.name}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-700/50 pt-4 text-xs text-slate-500">
          <span>
            Created{" "}
            {new Date(station.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>

          {token && (
            <div className="mt-3 sm:mt-0">
              <DeleteButton onClick={() => confirmDelete(station.id)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default StationCard;
