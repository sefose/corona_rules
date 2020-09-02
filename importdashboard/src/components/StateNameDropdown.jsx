import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { findAllStateNames } from "../service/RegulationDataService";
import { findAllRegulations } from "../service/RegulationServiceApiService";


const StateNameDropdown = ({ onChangeCallback }) => {
  const [stateNames, setStateNames] = useState([]);
  const [selectedState, setSelectedState] = useState(
    "Bitte wählen Sie ein Bundesland"
  );
  const [regulations, setRegulations] = useState(undefined);

  useEffect(() => {
    findAllStateNames()
      .then((resp) => {
        setStateNames(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setStateNames]);

  useEffect(() => {
    findAllRegulations()
      .then((resp) => {
        setRegulations(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setRegulations]);

  const onStateSeleted = (key, e) => {
    const value = e.target.innerHTML;
    setSelectedState(value);
    onChangeCallback(value.split(",")[0]);
  };

  const getModifyDate = (stateName) => {
    const date = new Date(regulations.filter(r => r.stateName = stateName)[0].modifyDate);
    return `${date.toLocaleDateString("de-DE")}, ${date.toLocaleTimeString("de-DE")}`;
  }

  return (
    <DropdownButton
      variant="secondary"
      title={selectedState}
      onSelect={onStateSeleted}
    >
      {stateNames.map((stateName, index) => (
        <Dropdown.Item key={index}>{stateName}, (zuletzt aktualisiert: {regulations && getModifyDate(stateName)})</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default StateNameDropdown;
