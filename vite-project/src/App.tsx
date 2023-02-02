import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./Components/NavBar";
import Counters from "./Components/Counters";
import Counter from "./Components/Counter";

export interface CounterInterface{
    id: number;
    value: number;

}

const initCounters = [
    { id: 1, value: 0},
    { id: 2, value: 0},
    { id: 3, value: 0},
    { id: 4, value: 0},
];



function App() {
  const [count, setCount] = useState(0)

    const [counters, setCounters] = useState<CounterInterface[]>(initCounters);


  const handleIncrement = (counter: CounterInterface): void => {
      const updatedCounter = [...counters];
      const index =updatedCounter.indexOf(counter);
      updatedCounter[index] = {...updatedCounter[index]};
      updatedCounter[index].value++;
      setCounters(updatedCounter);
  }


  return (
    <div className="App">
      <NavBar></NavBar>
      <Counters onIncrement={handleIncrement} counters={counters}></Counters>
    </div>
  )
}

export default App
