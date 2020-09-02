import React, { useState } from "react";
import { findRegulation, getStateNames } from "../service/RegulationService";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownAsync from "./DropdownAsync";


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

  const getListItemWithList = (title, list) => (
    <ListGroup.Item disabled>
      <b>{title}:</b> {list.map(item => item.type).join(', ')}
    </ListGroup.Item>
  );

  return (
    <div className="ml-4 mr-4 mt-2 mb-2">
     
      <DropdownAsync onChangeCallback={loadRegulation} 
        getData={getStateNames}
        placeholder="Bundesland"
      />
      {regulation && (
        <ListGroup className="mt-2">
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
          {
            getListItemWithList("Geschlossene Gebäude", regulation.closedBusinesses)
          }
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
