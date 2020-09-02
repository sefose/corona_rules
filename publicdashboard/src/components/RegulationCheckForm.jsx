import React, { useState } from "react";
import DropdownAsync from "./DropdownAsync";
import Dropdown from "./Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getBusinessTypes } from "../service/BusinessTypeService";
import { findRegulation, getStateNames } from "../service/RegulationService";
import NumericInput from "react-numeric-input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegulationDisplay from "./RegulationDisplay";
import ListGroup from "react-bootstrap/ListGroup";
import EvaluationModal from "./EvaluationModal";

const RegulationCheckForm = () => {
  const [indoors, setIndoors] = useState();
  const [area, setArea] = useState();
  const [eventType, setEventType] = useState();
  const [regulation, setRegulation] = useState();
  const [businessType, setBusinessType] = useState();
  const [numberOfPersons, setNumberOfPersons] = useState();
  const [numberOfHouseholds, setNumberOfHouseholds] = useState();
  const [showModal, setShowModal] = useState(false);
  const [evaluateText, setEvaluateText] = useState();

  const loadRegulation = (stateName) => {
    findRegulation(stateName).then((resp) => {
      setRegulation(resp.data);
    });
  };

  const checkRegulations = () => {
    if (allFieldsFilled()) {
      if (indoors) {
        return (
          numberOfPersons <= regulation.maxPersonsIndoor &&
          numberOfHouseholds <= regulation.maxHouseholdsIndoor &&
          area <= regulation.maxAttendeesIndoor &&
          !regulation.closedBusinesses.map(bus => bus.type).includes(businessType)
        );
      } else {
        return (
          numberOfPersons <= regulation.maxPersonsOutdoor &&
          numberOfHouseholds <= regulation.maxHouseholdsOutdoor &&
          area <= regulation.maxAttendeesOutdoor
        );
      }
    }
    return false
  };

  const allFieldsFilled = () => {
    return (
      indoors !== undefined &&
      area !== undefined &&
      eventType !== undefined &&
      regulation !== undefined &&
      businessType !== undefined &&
      numberOfPersons !== undefined &&
      numberOfHouseholds !== undefined
    );
  };

  const evaluate = () => {
    setEvaluateText(allFieldsFilled() ? getEvaluationText() : "Bitte alle Felder ausfüllen")
    setShowModal(true)
  }

  const getEvaluationText = () => {
    const text = checkRegulations()
    ? "Alle Regularien werden eingehalten!"
    : "Die Veranstaltung ist nicht Regelkonform!";
    return text
  };

  return (
    <>
      <Container>
        <Row className="m-2">
          <Col sm={6}>
            { regulation
              ? allFieldsFilled()
                ? getEvaluationText()
                : "Bitte alle Felder ausfüllen"
              : "Bitte Bundesland Wählen:"}
          </Col>
          <Col sm={6}>
            <DropdownAsync
              onChangeCallback={loadRegulation}
              getData={getStateNames}
              placeholder="Bundesland"
            />
          </Col>
        </Row>
        {regulation && (
          <Row>
            <Col sm={6}>
              <ListGroup className="mt-2">
                <ListGroup.Item>
                  <Form className="ml-4">
                    <Form.Group>
                      <Dropdown
                        onChangeCallback={setEventType}
                        data={[
                          "Zusammenkunft mehrerer Menschen",
                          "Besuch eines öffentlichen Gebäudes",
                          "Öffenliche Veranstaltung",
                        ]}
                        placeholder="Art der Unternehmung"
                      />
                    </Form.Group>

                    <Form.Group controlId="form.area">
                      <Form.Label>Personen pro Quadratmeter</Form.Label>
                      <NumericInput
                        step={0.1}
                        precision={1}
                        value={area}
                        onChange={setArea}
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Anzahl Personen</Form.Label>
                      <NumericInput
                        step={1}
                        precision={0}
                        value={numberOfPersons}
                        onChange={setNumberOfPersons}
                        className="form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="form.area">
                      <Form.Label>Anzahl Haushalte</Form.Label>
                      <NumericInput
                        step={1}
                        precision={0}
                        value={numberOfHouseholds}
                        onChange={setNumberOfHouseholds}
                        className="form-control"
                      />
                    </Form.Group>

                    <DropdownAsync
                      onChangeCallback={setBusinessType}
                      getData={getBusinessTypes}
                      placeholder="Gebäudetyp"
                    />

                    <Form.Group controlId="form.inout">
                      <Form.Label>
                        Innerhalb oder außerhalb geschlossener Räume?
                      </Form.Label>
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

                    <Button variant="primary" onClick={() => evaluate()}>
                      Prüfen
                    </Button>
                  </Form>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={6}>
              {regulation ? <RegulationDisplay regulation={regulation} /> : ""}
            </Col>
          </Row>
        )}
      </Container>
      <EvaluationModal
        show={showModal}
        setShow={setShowModal}
        evaluateText={evaluateText}
      />
    </>
  );
};

export default RegulationCheckForm;
