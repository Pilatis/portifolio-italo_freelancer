import React from 'react';
import { Button as ButtonChakra, type ButtonProps } from '@chakra-ui/react';


export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonChakra _hover={{ bg: 'whiteAlpha.200', color: 'white' }} border="none" borderColor="none" {...props}>{children}</ButtonChakra>
  )
}
