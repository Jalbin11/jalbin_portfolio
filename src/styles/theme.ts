import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#663399', // Deep Purple
    secondary: '#86868b',
    accent: '#06c',
    background: '#ffffff',
    text: '#1d1d1f',
    border: '#e0e0e0', // Light border color
    shadow: 'rgba(0, 0, 0, 0.1)', // Light shadow
    lightPrimary: '#e0c3fc', // Lilac color
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", // More comprehensive font stack
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      body: '1rem',
      small: '0.875rem', // Added small text size
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      body: 1.6, // Improved readability
    }
  },
  spacing: {
    base: '8px',
    borderRadius: '5px', // Added border radius
  },
  grid: {
    container: '1200px',
  },
  transitions: {
    default: '0.3s ease', // Added default transition
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#40E0D0', // Vibrant Teal
    secondary: '#86868b',
    accent: '#06c',
    background: '#121212', // Darker background
    text: '#e0e0e0', // Lighter text
    border: '#333333', // Darker border
    shadow: 'rgba(255, 255, 255, 0.1)', // Dark shadow
    lightPrimary: '#e0c3fc', // Lilac color
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      body: '1rem',
      small: '0.875rem',
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      body: 1.6,
    }
  },
  spacing: {
    base: '8px',
    borderRadius: '5px',
  },
  grid: {
    container: '1200px',
  },
  transitions: {
    default: '0.3s ease',
  }
};