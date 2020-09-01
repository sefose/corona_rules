import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { findAllStateNames } from "../service/RegulationDataService";

const GeneratedDropdown = ({ onChangeCallback }) => {
  const [stateNames, setStateNames] = useState([]);
  
  useEffect(() => {
    findAllStateNames()
      .then((resp) => {
        console.log("resp", resp);
        setStateNames(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setStateNames]);

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Dropdown button"
      onChange={onChangeCallback}
    >
      {stateNames.map((stateName) => (
        <Dropdown.Item>stateName</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default GeneratedDropdown;
