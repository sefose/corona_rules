import { findAllRegulations } from "./service/RegulationDataService.js";
import { saveAllRegulations } from "./service/RegulationServiceApiService.js";

setInterval(() =>  findAllRegulations().then((resp) => saveAllRegulations(resp.data)), 1000);