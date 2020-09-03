import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import RegulationCheckForm from "./views/RegulationCheckForm";
import RegulationView from "./views/RegulationView";

const App = () => {
  const [view, setview] = useState("checker");

  function viewSwitch(view) {
    switch (view) {
      case "display":
        return <RegulationView />;
      case "checker":
        return <RegulationCheckForm></RegulationCheckForm>;
      default:
        break;
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Corona Rules</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => setview("checker")}
              active={view === "checker"}
            >
              Konformitätsprüfer
            </Nav.Link>
            <Nav.Link
              onClick={() => setview("display")}
              active={view === "display"}
            >
              Verordnungen
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {viewSwitch(view)}
    </>
  );
};

export default App;
