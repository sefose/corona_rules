import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownAsync = ({ onChangeCallback, getData, placeholder }) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(placeholder);
  useEffect(() => {
    getData()
      .then((resp) => {
        setItems(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setItems, getData]);

  const onStateSeleted = (key, e) => {
    const value = e.target.innerHTML;
    setSelected(value);
    onChangeCallback(value);
  };

  return (
    <DropdownButton
    variant="secondary"
      title={selected}
      onSelect={onStateSeleted}
    >
      {items.map((type, index) => (
        <Dropdown.Item key={index}>{type}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownAsync;
