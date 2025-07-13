import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
      <span>{step}</span>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>Result is : {count}</div>
      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};
