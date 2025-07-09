import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme/theme.ts';
import './styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
