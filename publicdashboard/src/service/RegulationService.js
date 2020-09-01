import axios from "axios";
const API_URL = "http://localhost:8080/";
const REGULATION_URL = API_URL + "regulations/";
const STATENAME_URL = API_URL + "stateNames/";

export const findRegulation = (stateName) => {
  return axios.get(REGULATION_URL + stateName);
};

export const getStateNames = () => {
  return axios.get(STATENAME_URL);
};

