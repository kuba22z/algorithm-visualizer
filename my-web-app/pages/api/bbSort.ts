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
    res.setHeader("Access-Control-Allow-Origin", "https://kuba22z.github.io");
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    console.log(req)
    const input: string[] = JSON.parse(req.body)
    const inputAsNumbers = input.map(value => Number(value));
    res.status(200).json({changes: bblSort(inputAsNumbers)})
}

