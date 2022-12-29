import React, { useState } from 'react';
import Button from './Button';

// An example of implementing an interactive component using hooks
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p data-testid="message">You clicked {count} times</p>
      <Button data-testid="increment" onClick={() => setCount(count + 1)}>
        Increment counter
      </Button>
    </>
  );
};

export default Counter;
