import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        boxSizing: 'border-box',
        bg: '#FFFFFF',
        color: '#47585B'
      }
    }
  },
  colors: {
    gray: {
      '50': '#F5F8FA',
      '300': '#DADADA',
      '500': '#999999',
      '600': '#47585B',
      '900': '#000000'
    },
    yellow: {
      '500': '#FFBA08', // opacity 50% don't forget in borders
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  }
});