import React from "react";

interface UpdateButtonProps {
  onClick: () => void;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 cursor-pointer bg-yellow-500/80 text-xs text-white rounded hover:bg-yellow-600 transition-colors ml-2"
    >
      Edit
    </button>
  );
};