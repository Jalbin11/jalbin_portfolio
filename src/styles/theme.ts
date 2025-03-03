import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#86868b',
    accent: '#06c',
    background: '#ffffff',
    text: '#1d1d1f'
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue'",
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      body: '1rem'
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    base: '8px'
  },
  grid: {
    container: '1200px'
  }
};