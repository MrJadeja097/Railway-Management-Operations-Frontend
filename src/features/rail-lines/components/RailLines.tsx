import { useRailLineGetAll } from "../hooks";
import { RailLineCard } from "./RailLineCard";

export const RailLineComponent: React.FC = () => {
  const { railLine, loading } = useRailLineGetAll();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        Loading Rail Line Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-yellow-100 mb-2 drop-shadow-lg">
            Rail Lines
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30"></div>
        </div>

        {loading && (
          <p className="text-slate-300">Loading rail lines...</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {railLine.map((line) => (
            <RailLineCard key={line.id} railLine={line} />
          ))}
        </div>
      </div>
    </div>
  );
};
