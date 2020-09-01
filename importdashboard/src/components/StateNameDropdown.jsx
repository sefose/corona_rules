import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';

const GeneratedDropdown = ({ items, onChangeCallback }) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button" onChange={onChangeCallback}>
        {items.map(item => <Dropdown.Item>item</Dropdown.Item>)}
    </DropdownButton>
  );
};

export default GeneratedDropdown;
