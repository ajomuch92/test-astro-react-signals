import { useState } from "react";
import { useSignal } from "@preact/signals-react";

export default function Counters() {
    const [counter1, setCounter1] = useState(0);
    const counter2 = useSignal(0);

    return (
        <div>
            <button onClick={() => setCounter1((val) => val + 1)}>
                Counter 1: { counter1 }
            </button>
            <button onClick={() => counter2.value += 1}>
                Counter 2: { counter2.value }
            </button>
        </div>
    )
}