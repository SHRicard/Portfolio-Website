import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import { ThemeToggle } from "@atoms";
import { CContainer } from "@coreui/react";

const App = () => {
  return (
    <CContainer
      fluid
      className="fullscreen-container d-flex align-items-center justify-content-center"
    >
      <ThemeToggle />
    </CContainer>
  );
};

export default App;
