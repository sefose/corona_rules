import axios from "axios";
const DATA_API_URL = "http://regulationserviceapi:8080/";
const REGULATION_URL = DATA_API_URL + "regulations/";

const config = {
  headers: {
    user: "import",
    password: "importpassword"
  }
}
export const saveAllRegulations = (regulationArray) => {
  console.log(new Date(),": Start to save regulations");
  return axios.post(REGULATION_URL, regulationArray, config);
};
