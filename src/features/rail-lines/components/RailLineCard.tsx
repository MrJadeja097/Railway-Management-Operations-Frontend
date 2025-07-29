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
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-yellow-600/40">
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
      <div className="absolute top-5 right-0 w-16  text-gray-400 text-base font-semibold ">
        <span className="ml-1 text-lg">ID: {railLine.id}</span>
      </div>
          <div className="p-5 pb-3">
            <div className="flex items-center mb-4">
              <div>
                <h2 className="text-xl font-medium text-slate-100">
                  {railLine.name}
                </h2>
              </div>
            </div>
        <hr className="my-3 border-slate-600/40 group-hover:border-yellow-600/40 transition-colors duration-300" />
              <p className="text-sm text-slate-400 mb-1">Description</p>
              <div className="text-slate-200 text-sm mb-6">
                {railLine.description}
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-1">Start Station</p>
                <div className="text-slate-200 text-sm">
                  {railLine.startStation.name}
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">End Station</p>
                <div className="text-slate-200 text-sm">
                  {railLine.endStation.name}
                </div>
              </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-700/50 pt-3 text-xs text-slate-500 mt-3">
              <span>
                Created on {" "}
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
