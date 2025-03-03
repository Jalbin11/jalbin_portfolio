import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#00f7ff',
    background: '#ffffff',
    text: '#333333',
    accent: '#6d28d9'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    sizes: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      body: '1rem'
    }
  },
  grid: {
    container: '1200px'
  }
};