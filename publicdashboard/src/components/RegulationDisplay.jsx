import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const RegulationDisplay = ({ regulation }) => {
 
  const getStateList = (list) => list?.map((item) => {
    return (
      <>
      <Badge pill variant="secondary">{item.type}</Badge> {' '}
      </>
    )}
    );

  return (
    <div>
      <Table striped bordered hover className="mt-2" >
        <thead>
          <tr>
            <th></th>
            <th>Innen</th>
            <th>Außen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maximale Anzahl Personen</td>
            <td>{regulation.maxPersonsIndoor}</td>
            <td>{regulation.maxPersonsOutdoor}</td>
          </tr>
          <tr>
            <td>Maximale Anzahl Haushalte</td>
            <td>{regulation.maxHouseholdsIndoor}</td>
            <td>{regulation.maxHouseholdsOutdoor}</td>
          </tr>
          <tr>
            <td>Maximale Teilnehmerzahl pro Quadratmeter</td>
            <td>{regulation.maxAttendeesIndoor.toFixed(1)}</td>
            <td>{regulation.maxAttendeesOutdoor.toFixed(1)}</td>
          </tr>
          <tr>
            <td>MaskenPflicht</td>
            <td colSpan="2">{regulation.maskRequired ? "ja" : "nein"}</td>
          </tr>
          <tr>
            <td>Geschlossene Einrichtungen</td>
            <td colSpan="2">{getStateList(regulation.closedBusinesses)}</td>
          </tr>
          <tr>
            <td>Sonstiges</td>
            <td colSpan="2">{regulation.furtherRestrictions}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RegulationDisplay;
