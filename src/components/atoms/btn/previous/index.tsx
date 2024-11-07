import React from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";

interface IPrevious {
  onClick: () => void;
}

export const Previous: React.FC<IPrevious> = ({ onClick }) => {
  return (
    <MdOutlineNavigateBefore
      size={30}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        color: "red",
      }}
    />
  );
};
