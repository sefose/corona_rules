import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import {findRegulation} from '../service/RegulationService'
import { useEffect } from "react";

const RegulationDisplay = () => {

    const [regulation, setRegulation] = useState();

    useEffect(() => {
        findRegulation('Bayern').then(resp => {
            setRegulation(resp.data);
        })
    }, [findRegulation]);

  return (
    <>
        {regulation ? Object.keys(regulation).map(reg => (
            <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{reg}</Card.Title>
              <Card.Text>
                {regulation[reg]}
              </Card.Text>
            </Card.Body>
          </Card>
        )
        ) : "noData"}
    </>
  );
};

export default RegulationDisplay;
