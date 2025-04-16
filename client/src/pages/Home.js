import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CaseSearch from '../components/CaseSearch';

function Home() {
  return (
    <Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB', mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          He Team - Your Law Associate
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Empowering Men with Trusted Legal Support Across India
        </Typography>
        <Typography variant="body1" paragraph>
          At He Team, we understand the unique legal challenges men face in today’s world. Whether it’s navigating divorce proceedings, defending against false allegations, or securing your rights in property disputes, our platform connects you with experienced advocates who specialize in men’s legal issues. We are committed to providing accessible, confidential, and compassionate legal guidance tailored to your needs.
        </Typography>
        <Typography variant="body1" paragraph>
          Our services cover a wide range of cases, including child custody battles, alimony disputes, and workplace harassment claims, all handled with expertise in Indian laws like the Hindu Marriage Act, Indian Penal Code, and more. With advocates available in every major city and fluent in all Indian languages, we ensure you find the right support, no matter where you are.
        </Typography>
        <Typography variant="body1" paragraph>
          Beyond legal aid, He Team offers counseling referrals to help you manage the emotional toll of legal battles. Start your journey with us today—search for case details or register your case to connect with a dedicated lawyer who understands your perspective.
        </Typography>
        <Button variant="contained" component={Link} to="/register" sx={{ bgcolor: 'accent.main', mr: 2 }}>
          Register Your Case
        </Button>
        <Button variant="outlined" component={Link} to="/counseling" sx={{ borderColor: 'accent.main', color: 'accent.main' }}>
          Seek Counseling
        </Button>
      </Box>
      <CaseSearch />
    </Box>
  );
}

export default Home;