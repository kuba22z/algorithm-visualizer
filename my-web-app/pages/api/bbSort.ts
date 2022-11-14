// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {bblSort} from "../../utils/algorithms";

type Changes = {
    changes: number[][]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Changes>
) {

    const input: string[] = JSON.parse(req.body)
    const inputAsNumbers = input.map(value => Number(value));
    res.status(200).json({changes: bblSort(inputAsNumbers)})
}

