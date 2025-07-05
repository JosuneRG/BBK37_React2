import React, { useState } from 'react';

const Counter = ({ initialValue = 0, step = 1 }) => {
    
    // Estado que guarda el valor actual del contador
    const [count, setCount] = useState(initialValue);

    // Función para incrementar
    const handleIncrement = () => {
        setCount(count + step);
    };

    // Función para decrementar
    const handleDecrement = () => {
        setCount(count - step);
    };

    return (
       <div className="counter-box">
      <div className="counter-display">Contador: {count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - step)}>-</button>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
    </div>
  );
};


export default Counter