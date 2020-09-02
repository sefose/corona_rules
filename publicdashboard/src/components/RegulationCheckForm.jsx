import React from "react";
import BusinessTypeDropDown from './BusinessTypeDropdown'

const RegulationCheckForm = () => {

  const cb = () => console.log("Callback!")

  return (
    <>
    <BusinessTypeDropDown onChangeCallback={cb}/>
    <form className="m-3">
      <div className="form-group">
        <label for="sortOfSelect">Art der Unternehmung</label>
        <select className="form-control" id="sortOfSelect">
          <option>Zusammenkunft mehrerer Menschen</option>
          <option>Besuch eines öffentlichen Gebäudes</option>
          <option>Öffenliche Veranstaltung</option>
        </select>
      </div>
      <div className="form-group">
        <label for="areaInput">m^2 </label>
        <input
          type="number"
          className="form-control"
          id="areaInput"
          placeholder="200"
        />
      </div>
      <div className="form-group">
        <label for="businesstypeSelect">Art der Unternehmung</label>
        <select className="form-control" id="businesstypeSelect">
          <option>type1</option>
          <option>type1</option>
          <option>type1</option>
        </select>
      </div>
      <div className="form-group">
      <label for="inlineCheckbox1">Innerhalb oder außerhalb geschlossener Räume? </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Innerhalb
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Außerhalb
          </label>
        </div>
      </div>
    </form>
    </>
  );
};

export default RegulationCheckForm;
