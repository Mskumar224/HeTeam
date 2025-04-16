import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            color: 'accent.main',
            textDecoration: 'none',
            '&:hover': { color: '#FFC107' },
          }}
        >
          He Team
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1, color: 'background.default' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ mx: 1, color: 'background.default' }}>
            Register Case
          </Button>
          <Button color="inherit" component={Link} to="/advocates" sx={{ mx: 1, color: 'background.default' }}>
            Find Advocate
          </Button>
          <Button color="inherit" component={Link} to="/counseling" sx={{ mx: 1, color: 'background.default' }}>
            Counseling
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;