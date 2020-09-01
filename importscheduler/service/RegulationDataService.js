import axios from "axios";
const DATA_API_URL = "http://localhost:8081/";
const STATE_NAME_URL = DATA_API_URL + "states";
const REGULATION_URL = DATA_API_URL + "regulations";

export const findAllRegulations = () => {
  return axios.get(REGULATION_URL);
};
