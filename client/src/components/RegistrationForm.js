import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    caseType: '',
    location: '',
    language: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formData);
      alert(response.data.message || 'Registration successful! You will be contacted by an advocate soon.');
    } catch (error) {
      console.error('Registration error:', error.response || error);
      alert('Registration failed. Please try again later.');
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
    'Other',
  ];

  const languages = [
    'Hindi',
    'English',
    'Tamil',
    'Telugu',
    'Bengali',
    'Marathi',
    'Gujarati',
    'Kannada',
    'Malayalam',
    'Punjabi',
    'Odia',
    'Assamese',
    'Other',
  ];

  const caseTypes = [
    'Divorce',
    'Domestic Violence Defense',
    'Alimony Disputes',
    'Child Custody',
    'Property Disputes',
    'False Dowry Cases',
    'Workplace Harassment',
    'Paternity Disputes',
    'Inheritance Issues',
    'Criminal Defense (Men-Specific)',
    'Other',
  ];

  return (
    <Box sx={{ my: 4, p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB', maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Register Your Case
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          select
          label="Case Type"
          name="caseType"
          value={formData.caseType}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
          variant="outlined"
        >
          {caseTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
          variant="outlined"
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          label="Preferred Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
          variant="outlined"
        >
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: 'accent.main' }}>
          Register Now
        </Button>
      </form>
    </Box>
  );
}

export default RegistrationForm;