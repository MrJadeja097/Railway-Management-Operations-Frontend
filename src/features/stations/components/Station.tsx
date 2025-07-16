import { useStationGetAll } from "../hooks";
import StationCard from "./StationCard";



export const StationComponent: React.FC = () => {
  const { station, loading } = useStationGetAll();

  if (loading) {
    return  <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">Loading Station Data...</div>;
  }

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-fuchsia-100 mb-2 drop-shadow-lg">
            Stations Directory
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-fuchsia-400 to-pink-500 shadow-lg shadow-fuchsia-400/30"></div>
        </div>

        {loading && (
          <p className="text-slate-300">Loading stations...</p>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {station.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </div>
    </div>
  );
};