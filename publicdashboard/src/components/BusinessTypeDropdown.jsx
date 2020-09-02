import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getBusinessTypes } from "../service/BusinessTypeService";

const GeneratedDropdown = ({ onChangeCallback }) => {
  const [businessTypes, setBusinessTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("Bitte wählen Sie ein Gebäude");
  useEffect(() => {
    getBusinessTypes()
      .then((resp) => {
        setBusinessTypes(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setBusinessTypes]);

  const onStateSeleted = (key, e) => {
    const value = e.target.innerHTML;
    console.log('value', value)
    setSelectedType(value);
    onChangeCallback(value);
  };

  return (
    <DropdownButton
    variant="secondary"
      title={selectedType}
      onSelect={onStateSeleted}
    >
      {businessTypes.map((type, index) => (
        <Dropdown.Item key={index}>{type}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default GeneratedDropdown;
