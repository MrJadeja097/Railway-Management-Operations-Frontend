import React from "react";
import { useActiveRoutes } from "../hooks";


export const ActiveRoutes: React.FC = () => {
  const { routes, loading } = useActiveRoutes();

  if (loading) {
    return <div className="p-4 text-center">Loading active routes...</div>;
  }

  return (
    <div className="p-6 grid gap-4">
      {routes.map((route) => (
        <div
          key={route.id}
          className="border border-gray-300 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{route.name}</h2>
          <p className="text-gray-600 mb-2">
            📏 Length: {route.total_length} km | 🕒 Time: {route.total_time} hrs
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Start Station 🚉</h3>
              <p>{route.startStation.name}</p>
              <p>
                ({route.startStation.latitude}, {route.startStation.longitude})
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">End Station 🏁</h3>
              <p>{route.endStation.name}</p>
              <p>
                ({route.endStation.latitude}, {route.endStation.longitude})
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Driver 🚗</h3>
              <p>
                {route.driver.firstName} {route.driver.lastName}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Back Guard 🚦</h3>
              <p>
                {route.back_guard.firstName} {route.back_guard.lastName}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-1">Rail Line 🛤️</h3>
            <p className="text-gray-700 font-medium">{route.railLineId.name}</p>
            <p className="text-gray-600">{route.railLineId.description}</p>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Created at: {new Date(route.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};