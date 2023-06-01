import { CognitiveServicesCredentials } from 'ms-rest-azure'
import { NewsSearchClient } from 'azure-cognitiveservices-newssearch'
import Settings from '../../local.settings.json';

function getNewsRandomly() {
    // const credentials = new CognitiveServicesCredentials(Settings.bingApiKey);
    // const searchTerm = "Fitness";
    // const nerwsSearchApiClient = new NewsSearchClient(credentials);

    // return new Promise((resolve, reject) => {
    //     nerwsSearchApiClient.newsOperations.search(searchTerm)
    //         .then((result) => resolve(result))
    //         .catch((error) => {
    //             console.error(`Error on 'getNewsRandomly', with the error message: ${error}`);
    //             reject(error);
    //         })
    // })
}


export { getNewsRandomly }