import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Counseling() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#1B5E20' }}>
        Counseling Services
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        Our counseling services provide emotional and legal guidance for men facing challenges. Connect with our experts to discuss your case in a confidential setting.
      </Typography>
      <Button variant="contained" component={Link} to="/register" sx={{ bgcolor: '#FFD700' }}>
        Book a Session
      </Button>
    </Box>
  );
}

export default Counseling;