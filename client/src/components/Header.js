import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ alignItems: 'center', py: 1 }}>
        <Button
          component={Link}
          to="/"
          sx={{
            color: 'accent.main',
            textTransform: 'none',
            fontSize: '1.5rem',
            fontWeight: 700,
            p: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'accent.light',
            },
          }}
        >
          He Team
        </Button>
        <Box sx={{ display: 'flex', ml: 'auto' }}>
          <Button color="inherit" component={Link} to="/register" sx={{ color: 'background.default' }}>
            Register
          </Button>
          <Button color="inherit" component={Link} to="/counseling" sx={{ color: 'background.default' }}>
            Counseling
          </Button>
          <Button color="inherit" component={Link} to="/advocates" sx={{ color: 'background.default' }}>
            Find Advocates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;