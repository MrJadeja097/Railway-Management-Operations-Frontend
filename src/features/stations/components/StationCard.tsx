import React from "react";
import type { Station } from "../models";

interface Props {
  station: Station;
}

const StationCard: React.FC<Props> = ({ station }) => {
  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-fuchsia-500/30">
      <div className="p-6">
        {/* Header */}
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

        {/* Location */}
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

        {/* Rail Line */}
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 mb-1">🚆 Rail Line</p>
          <div className="text-slate-200 text-sm">
            ID: {station.railLine.id} — {station.railLine.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
