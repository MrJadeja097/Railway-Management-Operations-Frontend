import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export const HomeComponent: React.FC = () => {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-slate-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-8 text-cyan-100 drop-shadow-lg">
          🚉 Railway Management Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/active_routes"
            className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 border border-slate-700/50 hover:border-teal-500/30 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2 text-teal-200 group-hover:text-teal-400 transition">
              📍 Active Routes
            </h2>
            <p className="text-slate-400 mb-4">
              Check which routes are currently operational.
            </p>
            <span className="inline-block px-4 py-2 rounded-lg bg-teal-700/30 text-teal-200 group-hover:bg-teal-600/40 transition">
              View Routes
            </span>
          </Link>

          <Link
            to="/stations"
            className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 border border-slate-700/50 hover:border-pink-500/30 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2 text-pink-200 group-hover:text-pink-400 transition">
              🏙️ Stations
            </h2>
            <p className="text-slate-400 mb-4">
              View and manage all stations and their details.
            </p>
            <span className="inline-block px-4 py-2 rounded-lg bg-pink-700/30 text-pink-200 group-hover:bg-pink-600/40 transition">
              View Stations
            </span>
          </Link>

          <Link
            to="/trains"
            className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-200 group-hover:text-indigo-400 transition">
              🚂 Trains
            </h2>
            <p className="text-slate-400 mb-4">
              Manage all active and scheduled trains in the network.
            </p>
            <span className="inline-block px-4 py-2 rounded-lg bg-indigo-700/30 text-indigo-200 group-hover:bg-indigo-600/40 transition">
              View Trains
            </span>
          </Link>

          {token && (
            <Link
              to="/rail_lines"
              className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 border border-slate-700/50 hover:border-yellow-500/30 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-2 text-yellow-200 group-hover:text-yellow-400 transition">
                🛤️ Rail Lines
              </h2>
              <p className="text-slate-400 mb-4">
                Monitor all rail lines connecting the network.
              </p>
              <span className="inline-block px-4 py-2 rounded-lg bg-yellow-700/30 text-yellow-200 group-hover:bg-yellow-600/40 transition">
                View Rail Lines
              </span>
            </Link>
          )}

          {token && (
            <Link
              to="/staff"
              className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-2 text-cyan-200 group-hover:text-cyan-400 transition">
                👤 Staff
              </h2>
              <p className="text-slate-400 mb-4">
                Manage all employees, drivers, and guards.
              </p>
              <span className="inline-block px-4 py-2 rounded-lg bg-cyan-700/30 text-cyan-200 group-hover:bg-cyan-600/40 transition">
                View Staff
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
