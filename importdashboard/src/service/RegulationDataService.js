import axios from "axios";
const DATA_API_URL = "http://localhost:8081/";
const STATE_NAME_URL = DATA_API_URL + "states";
const REGULATION_URL = DATA_API_URL + "regulations";

export const findAllStateNames = () => {
  return axios.get(STATE_NAME_URL);
};

export const findAllRegulations = () => {
  return axios.get(REGULATION_URL);
};

export const findRegulationByStateName = (stateName) => {
  console.log("stateName", stateName);
  return axios.get(REGULATION_URL + "/" + stateName);
};
