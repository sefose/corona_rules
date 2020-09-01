import axios from "axios";
const API_URL = "http://localhost:8081/";
const stateNameURL = API_URL + "states";

export const findAllStateNames = () => {
  return axios.get(stateNameURL);
};