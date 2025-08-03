import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState('');

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Value incremented.");
  };

  const sayWelcome = (msg) => {
    alert("Message: " + msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  const handleSubmit = () => {
    setEuro((parseFloat(inr) / 90).toFixed(2));
  };

  return (
    <div className="App">
      <h1>Event Examples</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleClick}>OnPress</button>

      <br /><br />
      <h3>Currency Convertor</h3>
      <input
        type="text"
        placeholder="INR"
        value={inr}
        onChange={e => setInr(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Euro: {euro}</p>
    </div>
  );
}

export default App;
