import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

interface IAdvance {
  onClick: () => void;
}

export const Advance: React.FC<IAdvance> = ({ onClick }) => {
  return (
    <MdOutlineNavigateNext
      size={30}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        color: "green",
      }}
    />
  );
};
