import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import LoginModal from "./components/LoginModal";
import {
  findAllRegulations,
  findRegulationByStateName,
  findAllStateNames,
} from "./service/RegulationDataService";

import {
  saveAllRegulations,
  saveRegulation,
  findAllStoredRegulations,
} from "./service/RegulationServiceApiService";
import StateTableRow from "./components/StateTableRow";

const App = () => {
  const [stateNames, setStateNames] = useState([]);
  const [storedRegulations, setStoredRegulations] = useState([]);

  useEffect(() => {
    findAllStateNames()
      .then((resp) => {
        setStateNames(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setStateNames]);

  useEffect(() => {
    findAllStoredRegulations()
      .then((resp) => {
        setStoredRegulations(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [storedRegulations]);

  const importAllRegulations = () => {
    findAllRegulations().then((resp) =>
      saveAllRegulations(resp.data)
    );
  };

  const getModifyDate = (stateName) => {
    return storedRegulations.length > 0
      ? storedRegulations.filter((r) => r.stateName === stateName)[0].modifyDate
      : "";
  };
  const importRegulationsByState = (stateName) => {
    findRegulationByStateName(stateName).then((resp) =>
      saveRegulation(resp.data)
    );
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
      <Container className="m-4">
        <Row className="m-4">
          <Table size="sm">
            <thead>
              <tr>
                <th>Bundesland</th>
                <th>letzter Import</th>
                <th>
                  {" "}
        
                          {" "}
                          <
                Button onClick={importAllRegulations} variant="secondary">
                    alle importieren
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {stateNames &&
                stateNames.map((stateName, index) => (
                  <StateTableRow
                    key={index}
                    stateName={stateName}
                    modifyDate={getModifyDate(stateName)}
                    importCallback={() => importRegulationsByState(stateName)}
                  />
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default App;
