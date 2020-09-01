import { findAllRegulations } from "./service/RegulationDataService.js";
import { saveAllRegulations } from "./service/RegulationServiceApiService.js";

const handleSaveError = e => {
    console.log('Save Regulations Error', e);
}

const handleFindError = e => {
    console.log('Find Regulations Error', e);
}

setInterval(() =>  findAllRegulations().then((resp) => saveAllRegulations(resp.data).catch(handleSaveError)).catch(handleFindError), 1000 * 30);