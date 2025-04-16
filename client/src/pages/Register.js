import React from 'react';
import { Box, Typography } from '@mui/material';
import RegistrationForm from '../components/RegistrationForm';

function Register() {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h2" gutterBottom>
        Register Your Case
      </Typography>
      <Typography variant="body1" paragraph>
        Connect with expert advocates to address your legal needs. Fill in the details below to get started.
      </Typography>
      <RegistrationForm />
    </Box>
  );
}

export default Register;