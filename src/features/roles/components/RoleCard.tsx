import React, { useState } from "react";
import type { Role } from "../models";
import { PermissionModal } from "./PermissionsModal";
import { DeleteButton } from "../../../components";
import { useAuth } from "../../auth/AuthProvider";
import { deleteRole } from "../../../api";
import { useConfirmDelete } from "../../../Hooks";
import { AddPermissionForm } from './AddPermissionForm';
import { RemovePermissionForm } from "./RemovePermissionForm";

interface RoleCardProps {
  roles: Role;
  onDeleted: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({
  roles,
  onDeleted,
}) => {
  const { token, role } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const confirmDelete = useConfirmDelete(deleteRole, "Role", onDeleted);

  return (
    <div className="relative group bg-gradient-to-br from-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-rose-500/10 transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-rose-600/40 p-5 pb-3">
      <div className="absolute top-5 right-0 w-16 text-gray-400 text-base font-semibold">
        <span className="ml-1 text-lg">ID: {roles.id}</span>
      </div>

      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-100 leading-tight tracking-wide drop-shadow-md">
          {roles.name}
        </h2>
      </div>

      <hr className="my-3 border-slate-600/40 group-hover:border-rose-600/40 transition-colors duration-300" />

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {roles.description}
      </p>

      <div className="mt-6 flex flex-wrap mb-4 gap-4 items-center justify-start">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-lg text-sm text-white font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#6366f1] border border-indigo-500/30"
        >
          Show Permissions
        </button>
        <PermissionModal
          open={showModal}
          onClose={() => setShowModal(false)}
          roleName={roles.name}
          roleId={roles.id}
        />

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 rounded-lg text-sm text-white font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#22c55e] border border-green-500/30"
        >
          + Add Permission
        </button>

        <button
          onClick={() => setShowRemoveModal(true)}
          className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#f43f5e] border border-rose-500/30"
        >
          ❌ Revoke Access
        </button>
      </div>

      {showAddModal && (
        <div className="mb-8 flex justify-center">
          <AddPermissionForm roleId={roles.id} setShowAddModal={setShowAddModal}/>
        </div>
      )}

      {showRemoveModal && (
        <div className="mb-8 flex justify-center">
          <RemovePermissionForm roleId={roles.id} setShowRemoveModal={setShowRemoveModal}/>
        </div>
      )}

      <div className="pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
        <span>
          Created on{" "}
          {new Date(roles.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
        </span>

        {token && role === "Super Admin" && (
          <div className="flex items-center">
            <DeleteButton onClick={() => confirmDelete(roles.id)} />
          </div>
        )}
      </div>
    </div>
  );
};
