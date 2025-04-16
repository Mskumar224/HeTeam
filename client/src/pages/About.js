import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h2" gutterBottom>
        About He Team
      </Typography>
      <Typography variant="body1" paragraph>
        He Team is dedicated to providing legal support exclusively for men, addressing issues like divorce, property disputes, and domestic violence defense. Our mission is to empower men with access to affordable legal services and expert advocates across India.
      </Typography>
      <Typography variant="body1" paragraph>
        We connect you with experienced lawyers who understand Indian laws and specialize in men’s rights. Trust He Team to be your law associate.
      </Typography>
    </Box>
  );
}

export default About;