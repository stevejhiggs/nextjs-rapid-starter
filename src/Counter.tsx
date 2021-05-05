import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

// An example of implementing an interactive component using hooks
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Box marginBottom="2rem">
      <p data-testid="message">You clicked {count} times</p>
      <Button data-testid="increment" colorScheme={'blue'} onClick={() => setCount(count + 1)}>
        Increment counter
      </Button>
    </Box>
  );
};

export default Counter;
