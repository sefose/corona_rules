import axios from "axios";
const DATA_API_URL = "http://localhost:8080/";
const REGULATION_URL = DATA_API_URL + "regulations/";

export const saveAllRegulations = (regulationArray) => {
  return axios.post(REGULATION_URL, regulationArray);
};

export const saveRegulation = (regulation) => {
  return axios.post(REGULATION_URL + regulation.stateName, regulation);
};

export const findAllStoredRegulations = (regulationArray) => {
  return axios.get(REGULATION_URL, regulationArray);
};
