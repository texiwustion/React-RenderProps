// src/components/CounterDisplay.tsx
import React from 'react';

interface CounterDisplayProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterDisplay;