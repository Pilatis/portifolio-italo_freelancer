import { useBreakpointValue } from '@chakra-ui/react';

export const useMedium = () => {
  const isMedium =
    useBreakpointValue({ base: true, md: true, lg: false }) ?? false;
    
  return isMedium;
};
