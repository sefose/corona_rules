import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { findAllStateNames } from "../service/RegulationDataService";

const StateNameDropdown = ({ onChangeCallback }) => {
  const [stateNames, setStateNames] = useState([]);
  const [selectedState, setSelectedState] = useState(
    "Bitte wählen Sie ein Bundesland"
  );

  useEffect(() => {
    findAllStateNames()
      .then((resp) => {
        setStateNames(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setStateNames]);

  const onStateSeleted = (key, e) => {
    const value = e.target.innerHTML;
    console.log("value", value);
    setSelectedState(value);
    onChangeCallback(value);
  };

  return (
    <DropdownButton
      variant="secondary"
      title={selectedState}
      onSelect={onStateSeleted}
    >
      {stateNames.map((stateName, index) => (
        <Dropdown.Item key={index}>{stateName}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default StateNameDropdown;
