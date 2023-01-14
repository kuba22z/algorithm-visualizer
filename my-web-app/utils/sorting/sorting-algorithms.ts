// Bubble sort Implementation using Javascript
import {SortingArray} from "./sorting-array";
import {AvailableSortingAlgorithm} from "../constants/sorting";

export class SortingAlgorithms {

    public static sortWith(sortingAlgorithm: string, input: Array<number>): SortingArray<number> {
        const sortingArray = new SortingArray(input);
        switch (sortingAlgorithm) {
            case AvailableSortingAlgorithm.bubbleSort:
                return this.bubbleSort(sortingArray)
            case AvailableSortingAlgorithm.insertionSort:
                return this.insertionSort(sortingArray)
            default:
                return this.bubbleSort(sortingArray)
        }
    }

    private static bubbleSort = (arr: SortingArray<number>): SortingArray<number> => {
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
                    arr[j + 1] = temp
                }
            }
        }
        return arr
    }

    private static insertionSort = (arr: SortingArray<number>) => {
        for (let i = 1; i < arr.length; i++) {
            let currentValue = arr[i]
            let j
            for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
                arr[j + 1] = arr[j]
            }
            arr[j + 1] = currentValue
        }
        return arr
    }
}