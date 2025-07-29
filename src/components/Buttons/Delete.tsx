import React from "react";

interface DeleteButtonProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 w-14 flex justify-center py-1 ml-4 cursor-pointer bg-red-600/80 text-xs text-white rounded"
    >
    Delete
  </button>
);
