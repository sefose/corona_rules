import axios from "axios";
const DATA_API_URL = "http://localhost:8080/";
const REGULATION_URL = DATA_API_URL + "regulations/";

const config = {
  headers: {
    user: "import",
    password: "importpassword"
  }
}

export const saveAllRegulations = (regulationArray) => {
  return axios.post(REGULATION_URL, regulationArray, config );
};

export const saveRegulation = (regulation) => {
  return axios.post(REGULATION_URL + regulation.stateName, regulation, config);
};

export const findAllStoredRegulations = (regulationArray) => {
  return axios.get(REGULATION_URL, regulationArray);
};
