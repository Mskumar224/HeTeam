import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Card, CardContent, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from './BackButton';

function AdvocateFinder() {
  const [formData, setFormData] = useState({
    location: '',
    caseType: '',
    language: '',
  });
  const [advocates, setAdvocates] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/advocates`, {
        params: formData
      });
      setAdvocates(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching advocates:', error);
      const errorMessage = error.response?.data?.message || 
        error.message === 'Network Error' ? 
        'Unable to connect to the server. Please check your internet or try again later.' : 
        `Unable to fetch advocates: ${error.response?.status || 'Unknown error'}. Please try again.`;
      setError(errorMessage);
    }
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
    'Guwahati - Gauhati High Court',
    'Kochi - Kerala High Court',
    'Other'
  ];

  const caseTypes = [
    'False Dowry Allegations',
    'Divorce',
    'Alimony Disputes',
    'Child Custody',
    'Property Disputes',
    'Workplace Harassment',
    'Domestic Violence Defense',
    'Paternity Disputes',
    'Inheritance Issues',
    'Criminal Defense (Men-Specific)',
    'Other'
  ];

  const languages = [
    'Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi',
    'Gujarati', 'Kannada', 'Malayalam', 'Punjabi', 'Odia', 'Assamese', 'Other'
  ];

  return (
    <Container sx={{ py: 6 }}>
      <BackButton />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Find an Advocate
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Connect with trusted advocates across India who understand your needs with <span sx={{ color: 'accent.main' }}>He Team</span>.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 700, mx: 'auto', bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                select
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                variant="outlined"
              >
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
                value={formData.caseType}
                onChange={handleChange}
                variant="outlined"
              >
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
                value={formData.language}
                onChange={handleChange}
                variant="outlined"
              >
                {languages.map((lang) => (
                  <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ bgcolor: 'accent.main', color: 'text.primary', py: 1.5 }}
              >
                Find Advocates
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      {error && (
        <Typography color="error" sx={{ textAlign: 'center', mb: 4 }}>
          {error}
        </Typography>
      )}
      <Grid container spacing={3}>
        {advocates.length > 0 ? (
          advocates.map((advocate) => (
            <Grid item xs={12} sm={6} md={4} key={advocate._id}>
              <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {advocate.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Location: {advocate.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Specialization: {advocate.specialization}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Languages: {advocate.languages}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Contact: {advocate.contact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ textAlign: 'center', width: '100%', color: 'text.secondary' }}>
            No advocates found. Try adjusting your search.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default AdvocateFinder;