import React from "react";

interface DeleteButtonProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 ml-4 bg-red-600/80 text-xs text-white rounded hover:bg-red-700 transition-colors"
  >
    Delete
  </button>
);
