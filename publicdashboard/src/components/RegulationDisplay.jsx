import React, { useState } from "react";
import { findRegulation, getStateNames } from "../service/RegulationService";
import ListGroup from "react-bootstrap/ListGroup";
import StateNameDropdown from "./StateNameDropdown";

const RegulationDisplay = () => {
  const [regulation, setRegulation] = useState();

  const loadRegulation = (stateName) => {
    findRegulation(stateName).then((resp) => {
      setRegulation(resp.data);
    });
  };

  const getListItem = (title, value) => (
    <ListGroup.Item disabled>
      <b>{title}:</b> {value}
    </ListGroup.Item>
  );

  return (
    <div className="m-4">
      <StateNameDropdown onChangeCallback={loadRegulation} />
      {regulation && (
        <ListGroup>
          {getListItem(
            "Maximale Anzahl Personen in geschlossenen Räumen",
            regulation.maxPersonsIndoor
          )}
          {getListItem(
            "Maximale Anzahl Personen außerhalb geschlossener Räume",
            regulation.maxPersonsOutdoor
          )}
          {getListItem(
            "Maximale Anzahl Haushalte in geschlossenen Räumen",
            regulation.maxHouseholdsIndoor
          )}
          {getListItem(
            "Maximale Anzahl Haushalte außerhalb geschlossener Räume",
            regulation.maxHouseholdsOutdoor
          )}
          {getListItem(
            "Maskenpflicht",
            regulation.maskRequired ? "ja" : "nein"
          )}
          {getListItem(
            "Geschlossene Gebäude",
            regulation.closedBusinesses.reduce((acc, val) => {
              return acc + ", " + val;
            }, "")
          )}
          {getListItem(
            "Maximale Teilnehmerzahl pro Quadratmeter in geschlossenen Räumen",
            regulation.maxAttendeesIndoor
          )}
          {getListItem(
            "Maximale Teilnehmerzahl pro Quadratmeter außerhalb geschlossener Räume",
            regulation.maxAttendeesOutdoor
          )}
          {getListItem(
            "Sonstige Einschränkungen",
            regulation.furtherRestrictions
          )}
          {console.log(regulation.closedBusinesses)}
        </ListGroup>
      )}
    </div>
  );
};

export default RegulationDisplay;
