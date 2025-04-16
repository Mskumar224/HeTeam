import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2">
        © 2025 He Team - Your Law Associate | Dedicated to Men's Legal Rights
      </Typography>
      <Typography variant="body2">
        <Link href="/about" color="inherit" sx={{ mx: 1 }}>About Us</Link> |
        <Link href="/register" color="inherit" sx={{ mx: 1 }}>Contact</Link> |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Privacy Policy</Link> |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Terms of Service</Link>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Email: support@heteam.in | Phone: +91-123-456-7890
      </Typography>
    </Box>
  );
}

export default Footer;