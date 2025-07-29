import React, { useState } from "react";
import type { Station } from "../models";
import { useConfirmDelete, useUpdate } from "../../../Hooks";
import { deleteStation, updateStation } from "../../../api";
import { useAuth } from "../../auth/AuthProvider";
import { DeleteButton } from "../../../components/Buttons/Delete";
import { UpdateStationForm } from "./UpdateStationForm";
import { UpdateButton } from "../../../components";

interface Props {
  station: Station;
  onDeleted: () => void;
  onUpdated: () => void;
}

const StationCard: React.FC<Props> = ({ station, onDeleted, onUpdated }) => {
  const { token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const confirmDelete = useConfirmDelete(deleteStation, "Station", onDeleted);

  const update = useUpdate<Station>(updateStation, "Station", onUpdated);

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-rose-600/40">
      {isEditing ? (
        <UpdateStationForm
          station={station}
          onSubmit={async (data) => {
            await update(station.id, data as unknown as Station);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
        {token && (<div className="absolute top-5 right-2 w-16  text-gray-400 text-base font-semibold ">
        <span className="ml-1 text-lg">ID: {station.id}</span>
      </div>)}
        <div className="p-5 pb-3">
          <div className="flex items-center mb-4">

            <div>
              <h2 className="text-xl font-medium text-rose-100 leading-tight">
                {station.name}
              </h2>
            </div>
          </div>

        <hr className="my-3 border-slate-600/40 group-hover:border-rose-600/40 transition-colors duration-300" />


          <div className="space-y-2 mb-2 text-sm">
            <div className="flex items-center text-slate-300">
              <span className="text-gray-400">Latitude:</span>
              <span className="ml-2 text-slate-200">{station.latitude}</span>
            </div>
            <div className="flex items-center text-slate-300">
              <span className="text-gray-400">Longitude:</span>
              <span className="ml-2 text-slate-200">{station.longitude}</span>
            </div>
          </div>

          <div className="pt-2 border-t border- border-slate-700/50 text-sm mb-2">
            <p className="text-gray-400 mb-1">Rail Line</p>
            <div className="text-slate-100">
              ID: {station.railLine.id} — {station.railLine.name}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
                      <span>
                        Created on {" "}
                        {new Date(station.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                        })}
                      </span>
          
                      {token && (
                        <div className="flex items-center">
                          <DeleteButton onClick={() => confirmDelete(station.id)} />
                          <UpdateButton onClick={() => setIsEditing(true)} />
                        </div>
                      )}
                    </div>
        </div>
        </>
      )}
    </div>
  );
};

export default StationCard;
