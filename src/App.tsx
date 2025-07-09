import {
  Box,
  Stack,
  Container as ContainerChakra,
  Flex
} from '@chakra-ui/react';
import { Navbar } from './components/layout/navbar';
import { Presentation } from './components/layout/sections/presentation';
import { AboutMe } from './components/layout/sections/about-me';

function App() {
  return (
    <Box width="100%" minH="100vh" bg="#000">
      <Navbar enableTransition={true} />

      <Flex
        width="100%"
        align="flex-start"
        justify="flex-start"
        flexDirection="column"
        pt="150px"
        px={{ base: '1rem', md: '4rem', lg: '5rem', xl: '12rem', '2xl': '21rem' }}
        gap={{ base: '100px', md: '144px' }}
      >
        <Presentation />
        <AboutMe />
      </Flex>
    </Box>
  );
}

export default App;
