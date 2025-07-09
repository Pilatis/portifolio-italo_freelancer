import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

export const Logo = () => {
  const brackedStyle = {
    color: '#8f9094',
    fontSize: '28px',
    fontWeight: 'bold'
  };

  return (
    <Link href="/">
      <Box
        display="flex"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        gap={0.9}
        transition="200ms ease-in-out"
        _hover={{ opacity: '0.8' }}
      >
        <Text {...brackedStyle}>&#123;</Text>

        <Text
          fontFamily="monospace"
          textAlign="center"
          fontSize="32px"
          fontWeight="bold"
          mt={1}
          color="#FFFFFF"
        >
          I
        </Text>

        <Text {...brackedStyle}>&#125;</Text>
      </Box>
    </Link>
  );
};
