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
      <div className="absolute top-5 right-0 w-16  text-gray-400 text-base font-semibold ">
        <span className="ml-1 text-lg">ID: {person.id}</span>
      </div>
      <div className="p-5 pb-3">
        <div className="flex items-center">
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
        <hr className="my-3 border-slate-600/40 group-hover:border-cyan-400/30 transition-colors duration-300" />

        <div className="space-y-3 mb-3">
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

        <div>
          <div className="flex items-center mb-2">
            {person.role ? (
              <div>
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
        </div>
        <div className="flex  justify-between items-center border-t border-slate-700/50 pt-3 text-xs text-slate-500">
          <span>
             Joined on {" "}
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
