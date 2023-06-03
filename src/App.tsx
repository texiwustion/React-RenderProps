// src/App.tsx
import React from 'react';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';

const App: React.FC = () => (
  <div>
    <h1>Counter with Render Props</h1>
    <Counter>
      {({ count, increment, decrement }) => (
          <CounterDisplay
            count={count}
            increment={increment}
            decrement={decrement} />)
      }
    </Counter>
  </div>
);

export default App;