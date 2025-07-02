import { useState } from 'react';

function Counter({ initial = 0, step = 1 }) {

  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
