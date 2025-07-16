import { useTrainGetAll } from "../hooks/useTrainGetAll";
import { TrainCard } from "./TrainCard";


export const TrainComponent: React.FC = () => {
  const { trains, loading } = useTrainGetAll();

  if (loading) {
    return  <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">Loading Staff Data...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-indigo-100 mb-2 drop-shadow-lg">
             Trains
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg shadow-indigo-400/30"></div>
        </div>

        {loading && (
          <p className="text-slate-300">Loading trains...</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      </div>
    </div>
  );
};