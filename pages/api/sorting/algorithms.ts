import {SortingAlgorithmsResponseBody} from "../../../utils/types/api/sorting-api/sorting-algorithms";
import {NextApiRequest, NextApiResponse} from "next";
import {ApiMethods} from "../../../utils/constants/api";
import {AvailableSortingAlgorithm} from "../../../utils/constants/sorting";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SortingAlgorithmsResponseBody>
) {
    if (req.method !== ApiMethods.GET) {
        res.status(405).end() // method not allowed
        return
    }
    res.status(200).json({availableSortingAlgorithms: Object.values(AvailableSortingAlgorithm)})
}

