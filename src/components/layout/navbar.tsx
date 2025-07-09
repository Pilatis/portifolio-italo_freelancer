import React, { useEffect, useState } from 'react';
import { Box, Flex, Slide } from '@chakra-ui/react';
import { Button } from '../common/button';
import { Logo } from '../common/logo';

export const Navbar: React.FC<{ enableTransition: boolean }> = ({
  enableTransition
}) => {
  return (
    <Box position="fixed" top="0" left="0" right="0">
      <Slide
        direction="top"
        color="black"
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        in={true}
      >
        <Box
          width={{ base: '100%', md: '100%', lg: '75rem' }}
          marginInline="auto"
          bgColor="#000"
          borderBottom="0.5px solid rgb(30, 32, 41)"
          py={3}
          px={3}
          >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="22px"
            >
            <Logo />
            <Flex gap={2}>
              <Button variant="ghost" color="white" fontWeight="bold">
                Home
              </Button>
              <Button variant="ghost" color="white" fontWeight="bold">
                Projects
              </Button>
            </Flex>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};
