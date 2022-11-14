import {useState} from "react";
import {Visualizer} from "../components/Visualizer";
import {FieldArray} from "../components/FieldArray";


export default function Dashboard() {
    const [input, setInput] = useState([]);
    const [delay, setDelay] = useState(null);

    return (
        <div>
            <FieldArray setInput={setInput} setDelay={setDelay}/>
            <Visualizer input={input} delay={delay}/>
        </div>
    );
}

