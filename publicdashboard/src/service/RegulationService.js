import axios from "axios";
const API_URL = "http://localhost:8080/";
const stateNameURL = API_URL + "regulations/";

export const findRegulation = (stateName) => {
  return axios.get(stateNameURL + stateName);
};