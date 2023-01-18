// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {SortingRequestBody, SortingResponseBody} from "../../utils/types/api/sorting-api/sorting";
import {SortingAlgorithms} from "../../utils/sorting/sorting-algorithms";
import {ApiMethods} from "../../utils/constants/api";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SortingResponseBody>
) {
    if (req.method !== ApiMethods.POST) {
        res.status(405).end() // method not allowed
        return
    }
    const sortingBody: SortingRequestBody = JSON.parse(req.body)
    const inputAsNumbers = sortingBody.input.map(value => Number(value));
    const sortedInput = SortingAlgorithms.sortWith(sortingBody.algorithmToSort, inputAsNumbers)
    res.status(200).json({sortingSteps: sortedInput.sortingSteps})
}

