import React, { useCallback, useState } from "react";
import type { Train, TrainFormData } from "../models";
import { useDeleteTrain } from "../hooks/useDeleteTrain";
import { useUpdateTrain } from "../hooks";
import { TrainUpdateForm } from "./UpdateTrainForm";
import { toast } from "react-toastify";
import { useAuth } from "../../auth/AuthProvider";

interface Props {
  train: Train;
  onDeleted: () => void;
  onUpdated: () => void;
}

export const TrainCard: React.FC<Props> = ({ train, onDeleted, onUpdated }) => {
  const { token } = useAuth()
  const deleteTrain = useDeleteTrain();
  const updateTrain = useUpdateTrain(onUpdated);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = useCallback(async () => {
    if (confirm(`Are you sure you want to delete ${train.name}?`)) {
      await deleteTrain(train.id);
      onDeleted();
    }
  }, [deleteTrain, train.id, train.name, onDeleted]);

  const handleUpdate = useCallback(async (data: TrainFormData) => {
    try{
      await updateTrain(train.id, data);
      setIsEditing(false);
      toast.success('Train updated successfully.')
    } catch(error) {
      toast.error("Error in updating trian.")
    }
  }, [updateTrain, train.id]);

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-indigo-500/30 p-6">
      {isEditing ? (
        <TrainUpdateForm
          train={train}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
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

          <div className="pt-4 border-t border-slate-700/50 flex items-center text-xs text-slate-500">
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

           {token && ( <button
              onClick={handleDelete}
              className="px-3 py-1 ml-4 bg-red-600/80 text-xs text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete
            </button> )}

            {token && (<button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 ml-2 bg-yellow-500/80 text-xs text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Edit
            </button>)}
          </div>
        </>
      )}
    </div>
  );
};
