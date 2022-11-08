import {useState} from "react";
import {useInterval} from "usehooks-ts";

export function useDelayedForEach<T>(arr: T[], callback: (index: number, el: T) => void, delay: number) {
    const [counter, setCounter] = useState<number>(0)

    useInterval(() => {
        callback(counter, arr[counter])
        setCounter(counter + 1);
    }, counter < arr.length ? delay : null,)
}