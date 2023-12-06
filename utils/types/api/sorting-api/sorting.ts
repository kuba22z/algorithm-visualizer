export type SortingRequestBody = {
    input: number[],
    algorithmToSort: string
}

export type SortingResponseBody = {
    sortingSteps: Array<Array<number>>
}

