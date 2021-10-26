import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { Theme } from '@chakra-ui/theme';

const fonts = { mono: `'Menlo', monospace` };

const theme: Partial<Theme> = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'blue'
  }),
  {
    colors: {
      primary: '#2968a9'
    },
    fonts,
    styles: {
      global: {
        html: {
          fontSize: '16px'
        },
        'h1,h2,h3,h4,h5,h6,p': {
          marginBottom: '0.5rem'
        }
      }
    }
  }
);

export default theme;
