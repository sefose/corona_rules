import axios from "axios";
const API_URL = "http://regulationserviceapi:8080/";
const stateNameURL = API_URL + "regulations/";

export const findRegulation = (stateName) => {
  return axios.get(stateNameURL + stateName);
};