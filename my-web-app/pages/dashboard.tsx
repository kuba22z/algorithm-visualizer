import * as React from "react";
import {useState} from "react";
import {Visualizer} from "../components/Visualizer/Visualizer";
import {VisualizerForm} from "../components/Visualizer/VisualizerForm";


export default function Dashboard() {
    const [input, setInput] = useState([]);
    const [delay, setDelay] = useState(null);

    return (
        <div>
            <Visualizer input={input} delay={delay}/>
            <br/>
            <VisualizerForm setInput={setInput} setDelay={setDelay}/>
        </div>
    );
}

