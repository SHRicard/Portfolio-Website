import React, { useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@store";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "@theme";

const RootComponent = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(() => {
    return createTheme(mode === "dark" ? dark : light);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </React.StrictMode>
);
