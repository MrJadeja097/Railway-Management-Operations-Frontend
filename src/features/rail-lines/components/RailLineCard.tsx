import React, { useState } from "react";
import type { RailLine } from "../models";
import { useAuth } from "../../auth/AuthProvider";
import { deleteRailLine, updateRailLine } from "../../../api";
import { useConfirmDelete, useUpdate } from "../../../Hooks";
import { DeleteButton, UpdateButton } from "../../../components";
import { UpdateRailLineForm } from "./UpdateRailLineForm";

interface Props {
  railLine: RailLine;
  onDeleted: () => void;
  onUpdated: () => void;
}

export const RailLineCard: React.FC<Props> = ({
  railLine,
  onDeleted,
  onUpdated}) => {
  const { token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const confirmDelete = useConfirmDelete(
    deleteRailLine,
    "Rail Line",
    onDeleted
  );

  const update = useUpdate<RailLine>(updateRailLine, "Rail Line", onUpdated);

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-yellow-400/30">
      {isEditing ? (
        <UpdateRailLineForm
          railLine={railLine}
          onSubmit={async (data) => {
            await update(railLine.id, data as unknown as RailLine);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="absolute top-4 right-4 w-16 h-14 flex items-center justify-center bg-gradient-to-br from-slate-700/80 to-slate-600/80 backdrop-blur-sm rounded-xl border border-slate-600/50 text-slate-200 text-base font-semibold group-hover:from-yellow-400/20 group-hover:to-yellow-500/20 group-hover:border-yellow-300/30 transition-all duration-300">
            <span className="ml-1 text-lg">ID: {railLine.id}</span>
          </div>
          <div className="p-6">
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
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 mb-1">📝 Description</p>
              <div className="text-slate-200 text-sm mb-6"> {/* Increased margin-bottom */}
                {railLine.description}
              </div>
              <div className="mb-4"> {/* Added margin-bottom */}
                <p className="text-sm text-slate-400 mb-1">🚉 Start Station</p>
                <div className="text-slate-200 text-sm">
                  {railLine.startStation.name}
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">🏁 End Station</p>
                <div className="text-slate-200 text-sm">
                  {railLine.endStation.name}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-700/50 pt-4 text-xs text-slate-500 mt-6"> {/* Increased margin-top */}
              <span>
                Created{" "}
                {new Date(railLine.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
              {token && (
                <div className="flex space-x-2 mt-3 sm:mt-0">
                  <DeleteButton onClick={() => confirmDelete(railLine.id)} />
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
