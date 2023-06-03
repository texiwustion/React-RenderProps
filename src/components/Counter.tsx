// src/components/Counter.tsx
import React, { useState } from 'react';

interface CounterProps {
  children: (props: {
    count: number;
    increment: () => void;
    decrement: () => void;
  }) => React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <>{children({ count, increment, decrement })}</>;
};

export default Counter;