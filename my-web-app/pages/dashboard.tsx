import * as React from "react";
import {useState} from "react";
import {Visualizer} from "../components/Visualizer";
import {VisualizerForm} from "../components/VisualizerForm";


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

