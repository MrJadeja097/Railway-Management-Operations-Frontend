import React, { useState } from "react";
import type { Train } from "../models";
import { TrainUpdateForm } from "./UpdateTrainForm";
import { useAuth } from "../../auth/AuthProvider";
import { useConfirmDelete, useUpdate } from "../../../Hooks";
import { DeleteButton } from "../../../components/Buttons/Delete";
import { deleteTrain, updateTrain } from "../../../api";
import { UpdateButton } from "../../../components";

interface Props {
  train: Train;
  onDeleted: () => void;
  onUpdated: () => void;
}

export const TrainCard: React.FC<Props> = ({ train, onDeleted, onUpdated }) => {
  const { token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const confirmDelete = useConfirmDelete(deleteTrain, "Train", onDeleted);

  const update = useUpdate<Partial<Train>>(updateTrain, "Train", onUpdated);

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-indigo-600/40 p-5 pb-3">
      {isEditing ? (
        <TrainUpdateForm
          train={train}
          onSubmit={async (data) => {
            await update(train.id, data);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          {token && (
            <div className="absolute top-5 right-0 w-16  text-gray-400 text-base font-semibold ">
              <span className="ml-1 text-lg">ID: {train.id}</span>
            </div>
          )}
          <div className="flex items-center mb-4">
            <div>
              <h2 className="text-xl font-medium text-indigo-100 leading-tight">
                {train.name}
              </h2>
            </div>
          </div>
        <hr className="my-3 border-slate-600/40 group-hover:border-indigo-600/40 transition-colors duration-300" />

          <p className="font-medium text-gray-400 ">Description:</p>
          <p className="text-slate-300 mb-4">{train.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="font-medium text-gray-400 mb-1">Status:</p>
              <p className="text-slate-200">{train.status}</p>
            </div>

            <div>
              <p className="font-medium text-gray-400 mb-1">Top Speed:</p>
              <p className="text-slate-200">{train.top_speed} km/h</p>
            </div>
            <div>
              <p className="font-medium text-gray-400 mb-1">Coaches:</p>
              <p className="text-slate-200">{train.total_coaches}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
            <span>
              Created on {" "}
              {new Date(train.createdAt).toLocaleDateString("en-US", {
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
                <DeleteButton onClick={() => confirmDelete(train.id)} />
                <UpdateButton onClick={() => setIsEditing(true)} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
