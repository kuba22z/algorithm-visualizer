// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Changes = {
  changes: any[][]
}
type Input = {
  array: any[]
}

export const bblSort = (arr: any[]): any[][] => {
  let changes: any[][] = [];
  for (let i = 0; i < arr.length; i++) {

    // Last i elements are already in place
    for (let j = 0; j < (arr.length - i - 1); j++) {

      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {

        // If the condition is true then swap them
        let temp = arr[j]
        arr[j] = arr[j + 1]
        // necessary to clone whole arr and push it to changes, otherwise you would only copy the
        // reference and when you change arr, the arrays in changes will be changed too.
        changes.push([...arr])
        arr[j + 1] = temp
        changes.push([...arr])
      }
    }
  }
  return changes;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Changes>
) {
//  const arr: any[]= JSON.parse(req.body)
  res.status(200).json({changes: bblSort([5, 4, 2, 6, 2, 53, 2, 4, 2, 1])})
}

//JG3MZRCTKS1U4G57