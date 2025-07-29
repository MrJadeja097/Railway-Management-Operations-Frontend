import type React from "react";
import type { ActiveRoute } from "../models";

interface Props {
  route: ActiveRoute;
}

export const ActiveRouteCard: React.FC<Props> = ({ route }) => {
  return (
    <div
      key={route.id}
      className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-teal-600/40"
    >
      <div className="p-5 pb-3">
        <div className="flex items-center mb-4">
          <div>
            <h2 className="text-xl font-medium text-[#d0dad8] leading-tight">
              {route.name}
            </h2>
            <div className="flex items-center text-sm text-[#7a918f] mt-1">
              {route.total_length} km | {route.total_time} hrs
            </div>
          </div>
        </div>
        <hr className="my-3 border-slate-600/40 group-hover:border-teal-600/40 transition-colors duration-300" />

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
              Start Station
            </h3>
            <p className="text-[#d0dad8]">{route.startStation.name}</p>
            <p className="text-xs text-[#7a918f]">
              ({route.startStation.latitude}, {route.startStation.longitude})
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
              End Station
            </h3>
            <p className="text-[#d0dad8]">{route.endStation.name}</p>
            <p className="text-xs text-[#7a918f]">
              ({route.endStation.latitude}, {route.endStation.longitude})
            </p>
          </div>
        </div>
        

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Driver </h3>
            <p className="text-[#d0dad8]">
              {route.driver.firstName} {route.driver.lastName}
            </p>
            <p className="text-xs text-[#7a918f]">{route.driver.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">
              Back Guard
            </h3>
            <p className="text-[#d0dad8]">
              {route.back_guard.firstName} {route.back_guard.lastName}
            </p>
            <p className="text-xs text-[#7a918f]">{route.back_guard.email}</p>
          </div>
        </div>
        <hr className="my-3 border-slate-600/40 group-hover:border-teal-600/40 transition-colors duration-300" />

        <div className="mb-5">
          <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Train </h3>
          <p className="text-[#d0dad8] font-medium">{route.trainId.name}</p>
          <p className="text-sm text-[#7a918f]">{route.trainId.description}</p>
          <p className="text-xs text-[#7a918f]">
            Coaches: {route.trainId.total_coaches} | Top speed:{" "}
            {route.trainId.top_speed} km/h | Status: {route.trainId.status}
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-sm font-medium text-[#5dc1b9] mb-1">Rail Line</h3>
          <p className="text-[#d0dad8] font-medium">{route.railLineId.name}</p>
          <p className="text-sm text-[#7a918f]">
            {route.railLineId.description}
          </p>
        </div>
        <hr className=" border-slate-600/40" />

        <div className="pt-2 border-t border-[#1a2c2c]/50">
          <div className="flex items-center text-xs text-[#7a918f]">
            <span>
              Created on {" "} 
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
  );
};
