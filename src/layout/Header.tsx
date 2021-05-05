import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const MenuItems: React.FC = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header: React.FC = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="primary" color="white" {...props}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" data-testid="page-heading-title">
          Next.js starter
        </Heading>
      </Flex>
      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box display={{ sm: show ? 'block' : 'none', md: 'flex' }} width={{ sm: 'full', md: 'auto' }} alignItems="center" flexGrow={1}>
        <MenuItems>Menu1</MenuItems>
        <MenuItems>Menu2</MenuItems>
        <MenuItems>Menu3</MenuItems>
      </Box>
      <Box display={{ sm: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <Button bg="transparent" border="1px">
          Example Button
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
