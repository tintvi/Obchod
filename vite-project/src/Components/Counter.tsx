import {ReactElement} from "react";
import {CounterInterface} from "../App";
interface CounterPropsInterface {
    counter: CounterInterface;
    onIncrement: (counter: CounterInterface) => void;

}
export default function Counter ({counter, onIncrement}: CounterPropsInterface): ReactElement {
    return (
        <div>
            {counter.value}
            <button
                className={"btn-counter"}
                onClick={() => onIncrement(counter)}
            >+</button>
        </div>
    );
}