import {useEffect, useState} from "react";
import {useTransition} from "react-transition-state";
import {RectangleContainer} from "./Rectangle/RectangleContainer";
import {Rectangle} from "./Rectangle/Rectangle";
import {useDelayedForEach} from "../../utils/hooks/useDelayedForEach";
import {Nullable} from "../../utils/types/common";
import {SortingResponseBody} from "../../utils/types/api/sorting-api/sorting";
import {SortingRequest} from "../../utils/sorting/sorting-requests";

export type VisualizerProps = { input: any[], delay: Nullable<number>, algorithmToSort: string };

export const Visualizer = (props: VisualizerProps) => {
    const [visualizedNumbers, setVisualizedNumbers] = useState<number[]>([]);
    const [sortingSteps, setSortingSteps] = useState<Array<Array<number>>>([]);
    const [sortingStepHasChanged, setSortingStepHasChanged] = useState<boolean[]>([])
    const [state, toggle] = useTransition({timeout: 250});

    useEffect(() => {
        SortingRequest.getSortingSteps({
            algorithmToSort: props.algorithmToSort,
            input: props.input
        }).then(
            (body: SortingResponseBody) => {
                setSortingSteps(body.sortingSteps);
                setIteration(0);
            }
        );
    }, [props.input]);

    const {setIteration} = useDelayedForEach(sortingSteps, (i, sortingStep) => {
        if (i > 0) {
            const previousSortingSteps = sortingSteps[i - 1];
            const sortingStepHasChanged = previousSortingSteps.map((previousSortingStep, j, _) => sortingStep[j] !== previousSortingStep)
            setSortingStepHasChanged(sortingStepHasChanged)
        }
        toggle()
        setVisualizedNumbers(sortingStep);
    }, props.delay)

    return (
        <RectangleContainer>
            {visualizedNumbers.map((num, index) =>
                <Rectangle key={index} status={sortingStepHasChanged[index] ? state.status : "unmounted"}>
                    <div style={{fontSize: "300%"}}>{num}</div>
                </Rectangle>
            )}
        </RectangleContainer>
    )
}
