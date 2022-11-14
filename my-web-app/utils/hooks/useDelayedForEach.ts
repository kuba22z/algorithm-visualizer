import {useState} from "react";
import {useInterval} from "usehooks-ts";
import {Nullable} from "../types";

export function useDelayedForEach<T>(arr: T[], callback: (index: number, el: T) => void, delay: Nullable<number>) {
    const [counter, setCounter] = useState(0);

    useInterval(() => {
        callback(counter, arr[counter])
        setCounter(counter + 1);
    }, counter < arr.length && delay ? delay : null)
}