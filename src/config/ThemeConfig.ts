/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    appColors: any;
  }
  interface ThemeOptions {
    appColors?: any;
  }
}

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
        elevation: 0,
      },
    },
  },
  typography: {
    fontSize: 13,
  },
  appColors: {
    white: '#ffffff',
    grey: '#fbfbfb',
    blue: {
      light: '#1e3fcd',
      main: '#1333bb',
      dark: '#1532ad',
    },
    pink: '#db3655',
    teal: '#52bca6',
  },
});
