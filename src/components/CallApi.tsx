import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import fetch from '@/src/api/nextFetch';

// An example of calling the backend api
const CallApi: React.FC = () => {
  const [apiMessage, setApiMessage] = useState('');
  const [error, setError] = useState('');

  const callApi = async () => {
    const response = await fetch('/api/number/my-nice-id-value/returnId');
    if (!response.ok) {
      setError('something went wrong calling the api');
    }
    const payload = await response.json();
    setApiMessage(JSON.stringify(payload));
  };

  return (
    <Box marginBottom="2rem">
      <p data-testid="message">Api result: {apiMessage}</p>
      <Button data-testid="loadApi" colorScheme={'blue'} onClick={() => callApi()}>
        Load data from api
      </Button>
      <span data-testid="error">{error}</span>
    </Box>
  );
};

export default CallApi;
