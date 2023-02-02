import {ReactElement} from "react";
import {CounterInterface} from "../App";
import Counter from "./Counter";

interface CountersPropsInterface {
    counters: CounterInterface[];
    // onReset: () => void;
    onIncrement: (counter: CounterInterface) => void;
}

export default function Counters (props: CountersPropsInterface): ReactElement {
    return (
        <div>
            wow such counters

            {props.counters.map((counter: CounterInterface): ReactElement => (
                <Counter onIncrement={props.onIncrement} counter={counter}/>
                ))}
        </div>
    );
}