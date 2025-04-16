import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, TextField, MenuItem, Grid, Card, CardContent, Button } from '@mui/material';
import axios from 'axios';
import BackButton from './BackButton';

function AdvocateFinder() {
  const [filters, setFilters] = useState({
    location: '',
    caseType: '',
    language: '',
  });
  const [advocates, setAdvocates] = useState([]);

  useEffect(() => {
    fetchAdvocates();
  }, [filters]);

  const fetchAdvocates = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/advocates`, { params: filters });
      setAdvocates(response.data);
    } catch (error) {
      console.error('Error fetching advocates:', error);
    }
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const locations = [
    'Delhi - Delhi High Court',
    'Mumbai - Bombay High Court',
    'Chennai - Madras High Court',
    'Kolkata - Calcutta High Court',
    'Bengaluru - Karnataka High Court',
    'Hyderabad - Telangana High Court',
    'Ahmedabad - Gujarat High Court',
    'Jaipur - Rajasthan High Court',
    'Lucknow - Allahabad High Court',
    'Patna - Patna High Court',
    'Nalgonda - Nalgonda District Court',
    'Other',
  ];

  const languages = [
    'Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi',
    'Gujarati', 'Kannada', 'Malayalam', 'Punjabi', 'Odia', 'Assamese', 'Other',
  ];

  const caseTypes = [
    'Divorce', 'Domestic Violence Defense', 'Alimony Disputes', 'Child Custody',
    'Property Disputes', 'False Dowry Cases', 'Workplace Harassment',
    'Paternity Disputes', 'Inheritance Issues', 'Criminal Defense (Men-Specific)', 'Other',
  ];

  return (
    <Container sx={{ py: 6 }}>
      <BackButton />
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Find Your Advocate
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Connect with experienced advocates across India who specialize in your case type, speak your language, and practice in your location.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Location"
              name="location"
              value={filters.location}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="">All Locations</MenuItem>
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Case Type"
              name="caseType"
              value={filters.caseType}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="">All Case Types</MenuItem>
              {caseTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Language"
              name="language"
              value={filters.language}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="">All Languages</MenuItem>
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>{lang}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3}>
        {advocates.length > 0 ? (
          advocates.map((advocate) => (
            <Grid item xs={12} sm={6} md={4} key={advocate._id}>
              <Card sx={{ boxShadow: 3, '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'secondary.main' }}>
                    {advocate.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Specialization: {advocate.specialization}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Location: {advocate.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    Language: {advocate.language}
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/register"
                    sx={{ bgcolor: 'accent.main', color: 'text.primary' }}
                  >
                    Contact Advocate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', width: '100%' }}>
            No advocates found. Try adjusting your filters.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default AdvocateFinder;