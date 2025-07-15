import React from "react";
import { useActiveRoutes } from "../hooks";


export const ActiveRoutes: React.FC = () => {
  const { routes, loading } = useActiveRoutes();

  if (loading) {
    return <div  className="p-6 grid gap-6 bg-[#0a0f0f] min-h-screen text-[#d0dad8]">Loading active routes...</div>;
  }

return (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0f0f] to-[#0a0f0f] p-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#5dc1b9] mb-2 drop-shadow-lg">
          Active Routes
        </h1>
        <div className="w-20 h-0.5 bg-gradient-to-r from-[#5dc1b9] to-[#3da9a1] shadow-lg shadow-[#5dc1b9]/30"></div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {routes.map((route) => (
          <div
            key={route.id}
            className="group bg-[#112020]/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#5dc1b9]/10 transition-all duration-300 overflow-hidden border border-[#1a2c2c]/50 hover:border-[#5dc1b9]/30"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a2c2c]/80 to-[#1a2c2c]/60 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:from-[#5dc1b9]/20 group-hover:to-[#3da9a1]/20 transition-all duration-300 border border-[#1a2c2c]/50 group-hover:border-[#5dc1b9]/30">
                  <span className="text-xl">🚆</span>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-[#d0dad8] leading-tight">
                    {route.name}
                  </h2>
                  <div className="flex items-center text-sm text-[#7a918f] mt-1">
                    <span className="mr-1">📏</span>
                    {route.total_length} km | 🕒 {route.total_time} hrs
                  </div>
                </div>
              </div>

              {/* Stations */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
                    Start Station 🚉
                  </h3>
                  <p className="text-[#d0dad8]">{route.startStation.name}</p>
                  <p className="text-xs text-[#7a918f]">
                    ({route.startStation.latitude}, {route.startStation.longitude})
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
                    End Station 🏁
                  </h3>
                  <p className="text-[#d0dad8]">{route.endStation.name}</p>
                  <p className="text-xs text-[#7a918f]">
                    ({route.endStation.latitude}, {route.endStation.longitude})
                  </p>
                </div>
              </div>

              {/* Crew */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Driver 👨‍✈️</h3>
                  <p className="text-[#d0dad8]">
                    {route.driver.firstName} {route.driver.lastName}
                  </p>
                  <p className="text-xs text-[#7a918f]">{route.driver.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Back Guard 🛡️</h3>
                  <p className="text-[#d0dad8]">
                    {route.back_guard.firstName} {route.back_guard.lastName}
                  </p>
                  <p className="text-xs text-[#7a918f]">{route.back_guard.email}</p>
                </div>
              </div>

              {/* Train */}
              <div className="mb-5">
                <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Train 🚂</h3>
                <p className="text-[#d0dad8] font-medium">{route.trainId.name}</p>
                <p className="text-sm text-[#7a918f]">{route.trainId.description}</p>
                <p className="text-xs text-[#7a918f]">
                  Coaches: {route.trainId.total_coaches} | Top speed:{" "}
                  {route.trainId.top_speed} km/h | Status: {route.trainId.status}
                </p>
              </div>

              {/* Rail Line */}
              <div className="mb-5">
                <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
                  Rail Line 🛤️
                </h3>
                <p className="text-[#d0dad8] font-medium">{route.railLineId.name}</p>
                <p className="text-sm text-[#7a918f]">{route.railLineId.description}</p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[#1a2c2c]/50">
                <div className="flex items-center text-xs text-[#7a918f]">
                  <span className="mr-2">⏰</span>
                  <span>
                    Created{" "}
                    {new Date(route.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};
