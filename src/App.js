import React from 'react';
import { useState, useCallback, useMemo } from 'react';
import Child from './child';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const name = useCallback(() => {
    console.log('Really Skinny Jack');
  }, []);

  const number = 3;
  function calculateFactorial(number) {
    console.log('calculateFactorial called!');
    return number <= 0 ? 1 : number * calculateFactorial(number - 1);
  }
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div className="App">
      {console.log('parent')}
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>

      <h2>{count}</h2>
      <h2>{factorialResult}</h2>
      <Child name={name} />
    </div>
  );
}
