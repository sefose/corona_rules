import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const MyDropdown = ({ onChangeCallback, data, placeholder }) => {
  const [selected, setSelected] = useState(placeholder);

  const onStateSeleted = (key, e) => {
    const value = e.target.innerHTML;
    console.log('value', value)
    setSelected(value);
    onChangeCallback(value);
  };

  return (
    <DropdownButton
    variant="secondary"
      title={selected}
      onSelect={onStateSeleted}
    >
      {data.map((type, index) => (
        <Dropdown.Item key={index}>{type}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default MyDropdown;
