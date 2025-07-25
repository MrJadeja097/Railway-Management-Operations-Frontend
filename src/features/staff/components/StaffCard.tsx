import type { Staff } from "../models";
import { useConfirmDelete } from "../../../Hooks";
import { deleteStaff } from "../../../api";
import { DeleteButton } from "../../../components/Buttons/Delete";

interface Props {
  person: Staff;
  onDeleted: () => void;
}

export const StaffCard: React.FC<Props> = ({ person, onDeleted }) => {
  const confirmDelete = useConfirmDelete(deleteStaff, "Staff", onDeleted);

  return (
    <div
      key={person.id}
      className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-cyan-500/30"
    >
      <div className="absolute top-4 right-4 w-16 h-14 flex items-center justify-center bg-gradient-to-br from-slate-800/60 to-slate-600/80 backdrop-blur-sm rounded-xl border border-slate-600/50 text-slate-200 text-base font-semibold group-hover:from-slate-700/50  group-hover:border-cyan-500/30 transition-all duration-300">
        <span className="ml-1 text-lg">ID: {person.id}</span>
      </div>
      <div className="p-6">
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-700/50 pt-4 text-xs text-slate-500">
          <span>
            Created{" "}
            {new Date(person.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <DeleteButton onClick={() => confirmDelete(person.id)} />
        </div>
      </div>
    </div>
  );
};
