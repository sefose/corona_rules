import React, {useState}from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import StateNameDropdown from "./components/StateNameDropdown";
import { findAllStateNames } from "./service/RegulationDataService";

const App = () => {

  const [stateName, setStateName] = useState("please choose a State")

  const getStateNames = () => {
    findAllStateNames().then()
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Import Dashbord</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>get the data from the trustfull source</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        {console.log('findAllStaeNames()', findAllStateNames())}
        <StateNameDropdown onChangeCallback={setStateName} ></StateNameDropdown>
      </Container>
    </>
  );
};

export default App;
