import React, { useEffect, useState } from 'react';
import { Box, Container as ContainerChakra } from '@chakra-ui/react';

export const Container: React.FC<{
  enableTransition: boolean;
  children: React.ReactNode;
}> = ({ enableTransition, children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  //   useEffect(() => {
  //     const uaCode = process.env.NEXT_PUBLIC_UA_CODE;
  //     if (uaCode) {
  //       ReactGA.initialize(uaCode);
  //     }
  //   }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box as="main" pos="relative" pt="100px" px={5}>
      {mounted ? children : null}
    </Box>
  );
};
