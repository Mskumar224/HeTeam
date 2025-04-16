import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            He Team
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '0.8rem', color: 'white' }}>
            Your Legal Associates
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/case-details" sx={{ mx: 1 }}>
            Case Search
          </Button>
          <Button color="inherit" component={Link} to="/counseling" sx={{ mx: 1 }}>
            Counseling
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ mx: 1 }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;