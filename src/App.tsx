// src/App.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import { ThemeToggle } from "@atoms";
import { Footer } from "@molecules";
import { CContainer, CRow, CCol } from "@coreui/react";
import { useMediaQuery } from "@mui/material";
import { LayoutMD, LayoutSM, LayoutXL } from "@layout";

const App = () => {
  const isXL = useMediaQuery("(min-width:1280px)");
  const isMD = useMediaQuery("(min-width:768px) and (max-width:1279px)");
  const isSM = useMediaQuery("(max-width:767px)");

  return (
    <CContainer
      fluid
      className="fullscreen-container d-flex align-items-center justify-content-center flex-column"
    >
      {/* Fila superior para el ThemeToggle */}
      <CRow>
        <CCol className="d-flex justify-content-end p-3">
          <ThemeToggle />
        </CCol>
      </CRow>
      {/* Fila que ocupa el resto del espacio para el layout */}
      <CRow className="flex-grow-1">
        <CCol className="d-flex align-items-center justify-content-center p-0 m-0">
          {isXL && <LayoutXL />}
          {isMD && <LayoutMD />}
          {isSM && <LayoutSM />}
        </CCol>
      </CRow>
      <CRow className="footer-container d-flex align-items-center justify-content-center p-3">
        <CCol className="text-center">
          <Footer />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default App;
