import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2E59', // Navy Blue
    },
    secondary: {
      main: '#4A5E6D', // Slate Gray
    },
    accent: {
      main: '#D4A017', // Muted Gold
    },
    teal: {
      main: '#4DB6AC', // Soft Teal (new for counseling button)
    },
    background: {
      default: '#F8F9FA', // Off-White
      paper: '#FFFFFF', // Pure White
    },
    text: {
      primary: '#2D3748', // Dark Gray
      secondary: '#6B7280', // Mid Gray
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

export default theme;