import axios from "axios";
const API_URL = "http://localhost:8080/";
const BUSINESSTYPES_URL = API_URL + "businessTypes/";

export const getBusinessTypes = () => {
  return axios.get(BUSINESSTYPES_URL);
};

