import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20', // Forest green
    },
    secondary: {
      main: '#757575', // Gray
    },
    accent: {
      main: '#FFD700', // Gold
    },
    background: {
      paper: '#F5F5F5', // Light gray
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;