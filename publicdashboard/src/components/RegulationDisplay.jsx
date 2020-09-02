import React from "react";
import ListGroup from "react-bootstrap/ListGroup";


const RegulationDisplay = ({regulation}) => {

  const getListItem = (title, value) => (
    <ListGroup.Item disabled>
      <b>{title}:</b> {value}
    </ListGroup.Item>
  );

  const getListItemWithList = (title, list) => (
    <ListGroup.Item disabled>
      <b>{title}:</b> {list?.map(item => item.type).join(', ')}
    </ListGroup.Item>
  );

  return (
    <div>
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
        </ListGroup>
      )}
    </div>
  );
};

export default RegulationDisplay;
