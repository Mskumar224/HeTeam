import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E4F4F', // Forest Green
    },
    secondary: {
      main: '#E5E7EB', // Neutral Gray
    },
    accent: {
      main: '#D4A017', // Gold
    },
    error: {
      main: '#EF4444', // Soft Red
    },
    background: {
      default: '#E5E7EB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
    },
  },
  typography: {
    fontFamily: '"Arial", "Helvetica", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#D4A017', // Gold on hover
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;