import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

function Counseling() {
  return (
    <Container sx={{ py: 6 }}>
      <BackButton />
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Counseling for Indian Men
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          From the pressures of family to the weight of legal battles, Indian men face unique challenges. Our confidential counseling services—in your language, from anywhere in India—offer the support you need to find strength and clarity.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2 }}>
              Legal Counseling
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Confused about your legal options? Speak to experts who understand men’s issues, from false allegations to custody disputes, in Hindi, Tamil, Telugu, or your preferred language.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              sx={{ bgcolor: 'accent.main', color: 'text.primary' }}
            >
              Book a Session
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2 }}>
              Emotional Support
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Feeling isolated or overwhelmed? Our counselors provide a judgment-free space to address stress, stigma, or trauma, helping men across India rebuild confidence.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              sx={{ bgcolor: 'accent.main', color: 'text.primary' }}
            >
              Book a Session
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 6, py: 4, bgcolor: 'secondary.main', borderRadius: 2, color: 'background.default' }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Don’t Face It Alone
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/register"
          sx={{ bgcolor: 'accent.main', color: 'text.primary', px: 4 }}
        >
          Connect with <span sx={{ color: 'accent.main' }}>He Team</span> Today
        </Button>
      </Box>
    </Container>
  );
}

export default Counseling;