import React from "react";
import type { RailLine } from "../models";

interface Props {
  railLine: RailLine;
}

export const RailLineCard: React.FC<Props> = ({ railLine }) => {
  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-yellow-400/30">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:from-yellow-400/20 group-hover:to-yellow-500/20 transition-all duration-300 border border-slate-600/50 group-hover:border-yellow-300/30">
            🛤️
          </div>
          <div>
            <h2 className="text-xl font-medium text-slate-100 leading-tight">
              {railLine.name}
            </h2>
          </div>
        </div>

        {/* Rail Line ID */}
        <div className="mb-4 text-sm text-slate-300">
          <span className="text-slate-400 mr-2">🆔</span>
          <span className="text-slate-200">ID: {railLine.id}</span>
        </div>

        {/* Start & End Stations */}
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 mb-1">🚉 Start Station</p>
          <div className="text-slate-200 text-sm mb-3">
            {railLine.startStation.name}
          </div>

          <p className="text-sm text-slate-400 mb-1">🏁 End Station</p>
          <div className="text-slate-200 text-sm">
            {railLine.endStation.name}
          </div>
        </div>
      </div>
    </div>
  );
};
