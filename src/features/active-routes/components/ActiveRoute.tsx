import React from "react";
import { useActiveRoutes } from "../hooks";
import { ActiveRouteCard } from "./ActiveRouteCard";


export const ActiveRoutes: React.FC = () => {
  const { routes, loading } = useActiveRoutes();

  if (loading) {
    return <div  className="p-6 grid gap-6 bg-[#0a0f0f] min-h-screen text-[#d0dad8]">Loading active routes...</div>;
  }

return (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0f0f] to-[#0a0f0f] p-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-cyan-100 mb-2 drop-shadow-lg">
          Active Routes
        </h1>
        <div className="w-20 h-0.5 bg-gradient-to-r from-[#276e5f] to-[#3da96e] shadow-lg shadow-[#5dc1b9]/30"></div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {routes.map((route) => (
          <ActiveRouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  </div>
);

};
