import React from "react";
import { usePermissionsByRole } from "../hooks";

interface Props {
  open: boolean;
  onClose: () => void;
  roleName: string;
  roleId: number;
}

export const PermissionModal: React.FC<Props> = ({
  open,
  onClose,
  roleName,
  roleId,
}) => {
  const {
    data: permissions,
    isLoading,
    error,
  } = usePermissionsByRole(roleId, open);

  if (!open) return null;

  if (!isLoading) console.log("---------", permissions);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-8">
      <div className="bg-white w-full max-w-lg max-h-full rounded-lg shadow-lg relative flex flex-col border border-gray-200">
        {/* Header and Close button (Sticky) */}
        <div className="sticky top-0 bg-white z-10 px-6 pt-2 pb-2 border-b border-gray-200 rounded-t-lg">
          <button
            onClick={onClose}
            className="absolute top-1 right-4 text-blace hover:text-red-600 text-3xl"
          >
            ×
          </button>
          <h2 className="text-xl font-semibold">
            Permissions for <span className="text-blue-600">{roleName}</span>
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-4 max-h-[60vh]">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-600">Failed to load permissions</div>
          ) : (
            <ul className="space-y-3">
              {permissions.length > 0 ? (
                permissions.map((p: any) => (
                  <li key={p.id}>
                    <div className="inline-block">• {p.permissions.name}</div>
                    {/* <div className="text-sm text-gray-600">{p.permissions.description}</div> */}
                  </li>
                ))
              ) : (
                <p className="text-slate-500">No Permissoins allocated yet.</p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
