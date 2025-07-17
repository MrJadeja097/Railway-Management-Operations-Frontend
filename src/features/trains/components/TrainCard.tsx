import React from "react";
import type { Train } from "../models";

interface Props {
  train: Train;
}

export const TrainCard: React.FC<Props> = ({ train }) => {
  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-indigo-500/30">
      <div className="p-6">

        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300 border border-slate-600/50 group-hover:border-indigo-400/30">
            🚆
          </div>
          <div>
            <h2 className="text-xl font-medium text-slate-100 leading-tight">
              {train.name}
            </h2>
          </div>
        </div>


        <p className="text-slate-300 mb-4">📝 {train.description}</p>


        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="font-medium text-slate-400 mb-1">📌 Status:</p>
            <p className="text-slate-200">{train.status}</p>
          </div>
          <div>
            <p className="font-medium text-slate-400 mb-1">💨 Top Speed:</p>
            <p className="text-slate-200">{train.top_speed} km/h</p>
          </div>
          <div>
            <p className="font-medium text-slate-400 mb-1">🚃 Coaches:</p>
            <p className="text-slate-200">{train.total_coaches}</p>
          </div>
        </div>


        <div className="pt-4 border-t border-slate-700/50">
          <div className="flex items-center text-xs text-slate-500">
            <span>
              Created {new Date(train.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};