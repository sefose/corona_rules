import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import StateNameDropdown from "./components/StateNameDropdown";
import {
  findAllRegulations,
  findRegulationByStateName,
} from "./service/RegulationDataService";

const App = () => {
  const DEFAULTSTATECHOOSERTEXT = "please choose a State";
  const [stateName, setStateName] = useState(DEFAULTSTATECHOOSERTEXT);

  const importAllRegulations = () => {
    findAllRegulations().then((resp) => console.log("resp.data", resp.data));
  };

  const importRegulationsByState = () => {
    if (stateName !== DEFAULTSTATECHOOSERTEXT) {
      findRegulationByStateName(stateName).then((resp) => console.log("resp.data", resp.data));
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Import Dashbord</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>get the data from the trustful source</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <div className="d-flex justify-content-between m-3">
          <StateNameDropdown
            onChangeCallback={setStateName}
          ></StateNameDropdown>
          <Button onClick={importRegulationsByState} variant="secondary">
            Import data for selected state
          </Button>
          <Button onClick={importAllRegulations} variant="secondary">
            Import data for all states
          </Button>
        </div>
      </Container>
    </>
  );
};

export default App;
