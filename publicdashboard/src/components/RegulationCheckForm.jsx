import React, { useState } from "react";
import DropdownAsync from "./DropdownAsync";
import Dropdown from "./Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getBusinessTypes } from "../service/BusinessTypeService";
import { findRegulation, getStateNames } from "../service/RegulationService";

const RegulationCheckForm = () => {
  const [indoors, setIndoors] = useState();
  const [area, setArea] = useState();
  const [eventType, setEventType] = useState();
  const [regulation, setRegulation] = useState();
  const [businessType, setBusinessType] = useState();

  const loadRegulation = (stateName) => {
    findRegulation(stateName).then((resp) => {
      setRegulation(resp.data);
    });
  };

  const checkForm = () => {
    console.log('indoors :>> ', indoors);
    console.log('area :>> ', area);
    console.log('eventType :>> ', eventType);
    console.log('regulation :>> ', regulation);
    console.log('businessType :>> ', businessType);
  }

  return (
    <>
      <Form className="ml-4">
        <DropdownAsync
          onChangeCallback={loadRegulation}
          getData={getStateNames}
          placeholder="Bundesland"
        />
        <br></br>
        <Dropdown
          onChangeCallback={setEventType}
          data={[
            "Zusammenkunft mehrerer Menschen",
            "Besuch eines öffentlichen Gebäudes",
            "Öffenliche Veranstaltung",
          ]}
          placeholder="Art der Unternehmung"
        />

        <Form.Group controlId="form.area">
          <Form.Label>Fläche</Form.Label>
          <Form.Control
            as="input"
            type="text"
            pattern="[0-9]*"
            onChange={(e) => setArea(e.target.value)}
          />
        </Form.Group>
        <input type="number"/>

        <DropdownAsync
          onChangeCallback={setBusinessType}
          getData={getBusinessTypes}
          placeholder="Gebäudetyp"
        />

        <Form.Group controlId="form.inout">
          <Form.Label>Innerhalb oder außerhalb geschlossener Räume?</Form.Label>
          <Form.Check
            name="form.inout"
            type="radio"
            id={`default-radio`}
            label={`innerhalb`}
            onClick={() => setIndoors(true)}
          />
          <Form.Check
            name="form.inout"
            type="radio"
            id={`default-radio`}
            label={`außerhalb`}
            onClick={() => setIndoors(false)}
          />
        </Form.Group>

        <Button variant="primary" onClick={checkForm}>
          Prüfen
        </Button>
      </Form>
    </>
  );
};

export default RegulationCheckForm;
