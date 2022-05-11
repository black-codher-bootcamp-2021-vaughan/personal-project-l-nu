import React from 'react' 
import { createTheme } from '@mui/material/styles';


 const theme = createTheme({
    palette: {
      primary: {
        light: '#cb5e3c',
        main: '#bf360c',
        dark: '#852508',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  export default theme ;