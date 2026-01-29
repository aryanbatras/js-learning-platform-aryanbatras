const { createRoot } = ReactDOM;
const { useState, useEffect } = React;

function App() {
  return (
    <div>
      <h1>Interactive Counter Hello World </h1>
      <Counter />
      <AdvancedCounter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Simple Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  return (
    <div className="counter">
      <h2>Advanced Counter</h2>
      <p>Current count: {count}</p>
      <p>Step size: {step}</p>
      <button onClick={() => setCount(count - step)}>-{step}</button>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);