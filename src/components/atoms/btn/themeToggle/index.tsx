import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "@slices";
import type { RootState, AppDispatch } from "@store";

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <IconButton
      onClick={handleToggle}
      color="inherit"
      aria-label="toggle theme"
      sx={{
        transition: "color 0.3s ease",
      }}
    >
      {mode === "dark" ? (
        <FaSun style={{ color: "yellow", fontSize: "1.5em" }} />
      ) : (
        <FaMoon style={{ color: "grey", fontSize: "1.5em" }} />
      )}
    </IconButton>
  );
};
