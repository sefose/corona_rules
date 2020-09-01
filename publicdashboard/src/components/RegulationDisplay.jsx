import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { findRegulation } from "../service/RegulationService";
import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const RegulationDisplay = () => {
  const [regulation, setRegulation] = useState();

  useEffect(() => {
    findRegulation("Bayern").then((resp) => {
      setRegulation(resp.data);
    });
  }, [findRegulation]);

  const getCard = (title, value) => (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{value}</Card.Text>
    //   </Card.Body>
    // </Card>
    <ListGroup.Item disabled><b>{title}:</b> {value}</ListGroup.Item>
  );

  return (
    <>
    {regulation && <ListGroup className="m-4">
      {getCard(
        "Maximale Anzahl Personen in geschlossenen Räumen",
        regulation.maxAttendeesIndoor
      )}
      {getCard(
        "Maximale Anzahl Personen außerhalb geschlossener Räume",
        regulation.maxAttendeesOutdoor
      )}
      {getCard(
        "Maximale Anzahl Haushalte in geschlossenen Räumen",
        regulation.maxHouseholdsIndoor
      )}
      {getCard(
        "Maximale Anzahl Haushalte außerhalb geschlossener Räume",
        regulation.maxHouseholdsOutdoor
      )}
      {getCard(
        "Maskenpflicht",
        regulation.maskRequired ? "ja" : "nein"
      )}
      {getCard(
        "Geschlossene Gebäude",
        regulation.closedBusinesses.reduce((acc, val) => {
            return acc + val
        }, "")
      )}
      {console.log(regulation.closedBusinesses)}
      </ListGroup>}
    </>
  );
};

export default RegulationDisplay;
