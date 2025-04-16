import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#1B5E20' }}>
        Welcome to He Team
      </Typography>
      <Typography variant="h6" gutterBottom>
        Empowering men with legal support across India
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        He Team provides free case registration and connects you with experienced advocates for issues like divorce, child custody, false dowry cases, and more. Inspired by the resilience of Nalgonda, we stand for justice.
      </Typography>
      <Button variant="contained" component={Link} to="/register" sx={{ bgcolor: '#FFD700' }}>
        Register Your Case
      </Button>
    </Box>
  );
}

export default Home;