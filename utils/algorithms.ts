// Bubble sort Implementation using Javascript


export const bblSort = (arr: number[]): number[][] => {
    let changes: number[][] = [];
    changes.push([...arr])
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
