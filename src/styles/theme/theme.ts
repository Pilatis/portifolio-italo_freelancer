import { theme as ChakraTheme, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: '#000',
  useSystemColorMode: false
};

const fluidType = (minFont: number, maxFont: number) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const fonts = {
  ...ChakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};
const colors = {
  background: '#000000',
  secondary: '#080808',
  complement: '#FA934F',
  displayColor: '#FFFFFF',
  textPrimary: '#D1D5DB',
  textSecondary: '#8F9094',
  button1: '#3CCF91',
  button2: '#F6A20E',
  button3: '#5132BF',
  borderColor: '#111111',
  logoGrey: '#8F9094'
};

const customTheme = extendTheme({
  config,
  fonts,
  colors,
  fontSizes: {
    display: fluidType(80, 144),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24)
  }
});

export default customTheme;
