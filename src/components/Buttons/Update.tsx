import React from "react";

interface UpdateButtonProps {
  onClick: () => void;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
  return (
<button
  onClick={onClick}
  className="cursor-pointer bg-yellow-600 text-white rounded px-4 w-14 ml-2 py-1 flex justify-center">
   Edit
</button>

  );
};