import React from "react";
import ImportButton from "./ImportButton";

const StateTableRow = ({ stateName, modifyDate, importCallback }) => {
  modifyDate = new Date(modifyDate);
  return (
    <tr>
      <td>{stateName}</td>
      <td>{modifyDate.toLocaleDateString("de-DE")},{" "}
        {modifyDate.toLocaleTimeString("de-DE")}</td>
      <td><ImportButton importCallback={importCallback} /></td>
    </tr>
  );
};

export default StateTableRow;
