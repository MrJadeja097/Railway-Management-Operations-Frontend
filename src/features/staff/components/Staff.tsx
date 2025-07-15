import { useStaffGetAll } from "../hooks/useStaffGetAll";

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
         <div
           key={person.id}
           className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-cyan-500/30"
         >
           <div className="p-6">
             {/* Header */}
             <div className="flex items-center mb-4">
               <div className="w-12 h-12 bg-gradient-to-br from-slate-700/80 to-slate-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300 border border-slate-600/50 group-hover:border-cyan-400/30">
                 <span className="text-xl">👤</span>
               </div>
               <div>
                 <h2 className="text-xl font-medium text-slate-100 leading-tight">
                   {person.firstName} {person.lastName}
                 </h2>
                 <div className="flex items-center text-sm text-slate-400 mt-1">
                   <span className="mr-1">📍</span>
                   {person.city}
                 </div>
               </div>
             </div>

             {/* Contact Info */}
             <div className="space-y-3 mb-5">
               <div className="flex items-center text-sm text-slate-300">
                 <span className="w-4 mr-3">📞</span>
                 <span className="font-mono">{person.mobileNumber}</span>
               </div>
               
               <div className="flex items-center text-sm text-slate-300">
                 <span className="w-4 mr-3">📧</span>
                 <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                   {person.email}
                 </span>
               </div>
               
               <div className="flex items-start text-sm text-slate-300">
                 <span className="w-4 mr-3 mt-0.5">🏠</span>
                 <span className="leading-relaxed">{person.Address}</span>
               </div>
             </div>

             {/* Role Section */}
             <div className="mb-4">
               <div className="flex items-center mb-2">
                 <span className="mr-2">💼</span>
                 <span className="text-sm font-medium text-slate-200">Role</span>
               </div>
               {person.role ? (
                 <div className="pl-6">
                   <span className="inline-block px-3 py-1 bg-slate-700/60 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-slate-600/50">
                     {person.role.name}
                   </span>
                 </div>
               ) : (
                 <div className="pl-6">
                   <span className="inline-block px-3 py-1 bg-amber-900/40 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium border border-amber-600/30">
                     Unassigned
                   </span>
                 </div>
               )}
             </div>

             {/* Footer */}
             <div className="pt-4 border-t border-slate-700/50">
               <div className="flex items-center text-xs text-slate-500">
                 <span className="mr-2">⏰</span>
                 <span>
                   Joined {new Date(person.createdAt).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'short',
                     day: 'numeric'
                   })}
                 </span>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 </div>
);
};