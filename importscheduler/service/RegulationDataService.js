import axios from "axios";
const DATA_API_URL = "http://regulationdataserver:8081/";
const STATE_NAME_URL = DATA_API_URL + "states";
const REGULATION_URL = DATA_API_URL + "regulations";

export const findAllRegulations = () => {
  console.log("Start to load regulations");
  return axios.get(REGULATION_URL);
};
