import React from 'react'
import { SlideFade } from '@chakra-ui/react'
import type { Transition } from 'framer-motion'

export const SlideFadeCustom: React.FC<{ children: React.ReactNode, enter?: Transition | undefined }> = ({ children, enter: enterProps }) => {
  return (
    <SlideFade         dir="top"
        transition={{ enter: enterProps || { duration: 0.4, delay: 0.7 }   }}
        in={true}>
     {children}
    </SlideFade>
  )
}
