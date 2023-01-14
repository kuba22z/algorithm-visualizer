import {ApiMethods} from "../constants/api";
import {SortingRequestBody} from "../types/api/sorting-api/sorting";

export const SortingRequest = {

    getAvailableAlgorithms: () => {
        return fetch("/api/sorting/algorithms", {method: ApiMethods.GET,}).then((res) => {
            return res.json();
        }).catch((err) => {
            console.log(err.message);
        });
    },

    getSortingSteps: (body: SortingRequestBody) => {
        return fetch("/api/sorting", {
            method: ApiMethods.POST,
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((res) => {
            return res.json();
        }).catch((err) => {
            console.log(err.message);
        });
    }

}