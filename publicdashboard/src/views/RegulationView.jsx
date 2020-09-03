import React, { useState } from "react";
import { findRegulation, getStateNames } from "../service/RegulationService";
import DropdownAsync from "../components/DropdownAsync";
import RegulationDisplay from "../components/RegulationDisplay";


const RegulationView = () => {
  const [regulation, setRegulation] = useState(undefined);

  const loadRegulation = (stateName) => {
    findRegulation(stateName).then((resp) => {
      setRegulation(resp.data);
    });
  };

  return (
    <div className="ml-4 mr-4 mt-2 mb-2">
      <DropdownAsync
        onChangeCallback={loadRegulation}
        getData={getStateNames}
        placeholder="Bundesland"
      />
      {regulation && <RegulationDisplay regulation={regulation} />}
    </div>
  );
};

export default RegulationView;
