import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Container, Grid } from '@mui/material';
import axios from 'axios';
import BackButton from './BackButton';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    caseType: '',
    location: '',
    language: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', caseType: '', location: '', language: '', description: '' });
    } catch (error) {
      console.error('Registration error:', error.response || error);
      const errorMessage = error.response?.data?.message || 
        error.message === 'Network Error' ? 
        'Unable to connect to the server. Please check your internet or try again later.' : 
        `Registration failed: ${error.response?.status || 'Unknown error'}. Please try again later.`;
      alert(errorMessage);
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
    'Other',
  ];

  const languages = [
    'Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi',
    'Gujarati', 'Kannada', 'Malayalam', 'Punjabi', 'Odia', 'Assamese', 'Other',
  ];

  const caseTypes = [
    'False Dowry Allegations', 'Divorce', 'Alimony Disputes', 'Child Custody',
    'Property Disputes', 'Workplace Harassment', 'Domestic Violence Defense',
    'Paternity Disputes', 'Inheritance Issues', 'Criminal Defense (Men-Specific)', 'Other',
  ];

  return (
    <Container sx={{ py: 6 }}>
      <BackButton />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
          Share Your Struggle
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Facing a legal or personal challenge? Register your case for free, and let <span sx={{ color: 'accent.main' }}>He Team</span> connect you with advocates across India who understand your needs.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 700, mx: 'auto', bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Case Type"
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                required
                variant="outlined"
              >
                {caseTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                variant="outlined"
              >
                {locations.map((loc) => (
                  <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Preferred Language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                variant="outlined"
              >
                {languages.map((lang) => (
                  <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tell Us Your Story (Optional)"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ bgcolor: 'accent.main', color: 'text.primary', py: 1.5 }}
              >
                Submit Your Case
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;