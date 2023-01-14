import {useState} from "react";
import {useInterval} from "usehooks-ts";
import {Nullable} from "../types/common";

export function useDelayedForEach<T>(arr: T[], callback: (index: number, el: T) => void, delay: Nullable<number>) {
    const [iteration, setIteration] = useState(0);

    useInterval(() => {
        callback(iteration, arr[iteration])
        setIteration(iteration + 1);
    }, iteration < arr.length && delay ? delay : null)
    return {setIteration}
}