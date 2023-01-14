import * as React from "react";
import {useState} from "react";
import {Visualizer} from "../components/Visualizer/Visualizer";
import {VisualizerForm} from "../components/Visualizer/VisualizerForm";
import {Nullable} from "../utils/types/common";
import {AvailableSortingAlgorithm} from "../utils/constants/sorting";

export default function Dashboard() {
    const [input, setInput] = useState<string[]>([]);
    const [delay, setDelay] = useState<Nullable<number>>(null);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(AvailableSortingAlgorithm.bubbleSort)

    return (
        <div>
            <Visualizer input={input} delay={delay} algorithmToSort={selectedAlgorithm}/>
            <br/>
            <VisualizerForm onSubmit={(visualizerInput: string[]) => {
                setInput(visualizerInput)
                setDelay(1000)
            }}
                            selectedAlgorithm={selectedAlgorithm}
                            onContinueVisualization={() => setDelay(1000)}
                            onStopVisualization={() => setDelay(null)}
                            onChangeAlgorithm={(sortingAlgorithm) => setSelectedAlgorithm(sortingAlgorithm)}
            />
        </div>
    );
}

