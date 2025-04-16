import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'background.default', textDecoration: 'none', fontWeight: 700 }}>
          He Team
        </Typography>
        <Button color="inherit" component={Link} to="/register" sx={{ color: 'background.default' }}>
          Register
        </Button>
        <Button color="inherit" component={Link} to="/counseling" sx={{ color: 'background.default' }}>
          Counseling
        </Button>
        <Button color="inherit" component={Link} to="/advocates" sx={{ color: 'background.default' }}>
          Find Advocates
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;