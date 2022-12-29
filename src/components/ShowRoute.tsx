import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

// An example of interacting with the router
// Route params will also appear as part of the query
const ShowRoute: React.FC = () => {
  const router = useRouter();

  return (
    <Box marginBottom="2rem">
      <p>Router information:</p>
      <ul>
        <li data-testid="route">Route: {router.asPath}</li>
        <li data-testid="pathName">Path name: {router.pathname}</li>
        <li data-testid="query">Query: {JSON.stringify(router.query, undefined, 2)}</li>
      </ul>
    </Box>
  );
};

export default ShowRoute;
