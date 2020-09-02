import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import StateNameDropdown from "./components/StateNameDropdown";
import LoginModal from "./components/LoginModal";
import {
  findAllRegulations,
  findRegulationByStateName,
} from "./service/RegulationDataService";

import {
  saveAllRegulations,
  saveRegulation,
} from "./service/RegulationServiceApiService";

const App = () => {
  const DEFAULTSTATECHOOSERTEXT = "Bitte wählen Sie ein Bundesland";
  const [stateName, setStateName] = useState(DEFAULTSTATECHOOSERTEXT);

  const importAllRegulations = () => {
    findAllRegulations().then((resp) => saveAllRegulations(resp.data));
  };

  const importRegulationsByState = () => {
    if (stateName !== DEFAULTSTATECHOOSERTEXT) {
      findRegulationByStateName(stateName).then((resp) =>
        saveRegulation(resp.data)
      );
    }
  };

  return (
    <>
      <LoginModal />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Import Dashbord</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>Daten aus einer vertrauenswürdigen Quelle!</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <div className="d-flex justify-content-between m-3">
          <StateNameDropdown
            onChangeCallback={setStateName}
          ></StateNameDropdown>
          <Button onClick={importRegulationsByState} variant="secondary">
            Daten für das gewählte Bundesland importieren
          </Button>
          <Button onClick={importAllRegulations} variant="secondary">
            Daten für alle Bundesländer importieren
          </Button>
        </div>
      </Container>
    </>
  );
};

export default App;
