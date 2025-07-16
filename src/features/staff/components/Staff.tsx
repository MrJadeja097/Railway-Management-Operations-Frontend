import { useStaffGetAll } from "../hooks";
import { StaffCard } from "./StaffCard";

export const StaffComponent: React.FC = () => {
  const { staff, loading } = useStaffGetAll();

  if (loading) {
    return  <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">Loading Staff Data...</div>;
  }

return (
 <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
   <div className="max-w-7xl mx-auto">
     <div className="mb-8">
       <h1 className="text-3xl font-light text-cyan-100 mb-2 drop-shadow-lg">Staff Directory</h1>
       <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/30"></div>
     </div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {staff.map((person) => (
         <StaffCard key={person.id} person={person} />
       ))}
     </div>
   </div>
 </div>
);
};