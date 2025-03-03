import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
    };
    typography: {
      fontFamily: string;
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        body: string;
      };
    };
    grid: {
      container: string;
    };
  }
}