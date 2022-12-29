import {useEffect, useState} from "react";
import {useTransition} from "react-transition-state";
import {RectangleContainer} from "./RectangleContainer";
import {Rectangle} from "./Rectangle";
import {useDelayedForEach} from "../utils/hooks/useDelayedForEach";
import {Nullable} from "../utils/types/common";

export type VisualizerProps = { input: any[], delay: Nullable<number> };

export const Visualizer = (props: VisualizerProps) => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [changes, setChanges] = useState<number[][]>([]);
    const [isChanged, setIsChanged] = useState<boolean[]>([])
    const [state, toggle] = useTransition({timeout: 250});

    const handleSubmit = (e: number[]) => {
        return fetch("/api/bbSort", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(e)
        }).then((res) => {
            return res.json();
        }).catch((err) => {
            console.log(err.message);
        });
    }

    useEffect(() => {
        handleSubmit(props.input).then(
            (res) => {
                setChanges(res.changes)
                setCounter(0);
            }
        );
    }, [props.input]);

    const {setCounter} = useDelayedForEach(changes, (i, change) => {
        if (i > 0) {
            setIsChanged(changes[i - 1].map((value, j, _) => change[j] !== value))
        }
        toggle()
        setNumbers(change);
    }, props.delay)

    return (
        <RectangleContainer>
            {numbers.map((num, index) =>
                <Rectangle key={index} status={isChanged[index] ? state.status : "unmounted"}>
                    <div style={{fontSize: "300%"}}>{num}</div>
                </Rectangle>
            )}
        </RectangleContainer>
    )
}
