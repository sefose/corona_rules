import { findAllRegulations } from "./service/RegulationDataService.js";
import { saveAllRegulations } from "./service/RegulationServiceApiService.js";

const handleSaveError = (e) => {
  console.log("Save Regulations Error", e);
};

const handleFindError = (e) => {
  console.log("Find Regulations Error", e);
};

const copyRegulations = () =>
  findAllRegulations()
    .then((resp) => saveAllRegulations(resp.data).catch(handleSaveError))
    .catch(handleFindError);

copyRegulations();

setInterval(copyRegulations, 1000 * 60 * 30);
