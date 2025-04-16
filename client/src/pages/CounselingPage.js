import React from 'react';
import { Box, Typography } from '@mui/material';
import Counseling from '../components/Counseling';

function CounselingPage() {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h2" gutterBottom>
        Counseling Support
      </Typography>
      <Typography variant="body1" paragraph>
        Legal battles can be emotionally challenging. He Team offers access to trusted psychiatrists to help you cope. Enter your concern, location, and preferred language to receive personalized advice and a referral.
      </Typography>
      <Counseling />
    </Box>
  );
}

export default CounselingPage;