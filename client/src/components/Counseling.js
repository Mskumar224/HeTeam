import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Link } from '@mui/material';

function Counseling() {
  const [formData, setFormData] = useState({
    query: '',
    location: '',
    language: '',
  });
  const [aiResponse, setAiResponse] = useState('');
  const [psychiatrist, setPsychiatrist] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    if (formData.query.trim() && formData.location && formData.language) {
      // Simulated AI response
      setAiResponse(
        `Based on your query "${formData.query}", we recommend seeking professional counseling to address emotional or legal stress. Counseling can provide clarity and support during challenging times. Below are details of a psychiatrist in your area.`
      );

      // Simulated psychiatrist data based on location and language
      const psychiatrists = [
        {
          name: 'Dr. Anil Kumar',
          location: 'Delhi',
          language: 'Hindi',
          contact: 'https://example.com/dr-anil',
        },
        {
          name: 'Dr. Priya Sharma',
          location: 'Mumbai',
          language: 'English',
          contact: 'https://example.com/dr-priya',
        },
        {
          name: 'Dr. Suresh Rao',
          location: 'Chennai',
          language: 'Tamil',
          contact: 'https://example.com/dr-suresh',
        },
        {
          name: 'Dr. Venkatesh Reddy',
          location: 'Hyderabad',
          language: 'Telugu',
          contact: 'https://example.com/dr-venkatesh',
        },
      ];

      const selected = psychiatrists.find(
        (p) => p.location === formData.location && p.language === formData.language
      ) || {
        name: 'Local Psychiatrist',
        location: formData.location,
        language: formData.language,
        contact: 'https://example.com/find-psychiatrist',
      };

      setPsychiatrist(selected);
    } else {
      setAiResponse('Please fill in all fields to get counseling recommendations.');
      setPsychiatrist(null);
    }
  };

  const locations = [
    'Delhi',
    'Mumbai',
    'Chennai',
    'Hyderabad',
    'Bengaluru',
    'Kolkata',
    'Other',
  ];

  const languages = [
    'Hindi',
    'English',
    'Tamil',
    'Telugu',
    'Bengali',
    'Marathi',
    'Other',
  ];

  return (
    <Box sx={{ my: 4, p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h5" gutterBottom>
        Find Counseling Support
      </Typography>
      <TextField
        fullWidth
        label="Describe your concern (e.g., stress, legal anxiety)"
        name="query"
        value={formData.query}
        onChange={handleChange}
        sx={{ mb: 2 }}
        variant="outlined"
      />
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
      <Button variant="contained" onClick={handleSearch} sx={{ bgcolor: 'accent.main', mb: 2 }}>
        Search
      </Button>
      {aiResponse && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            {aiResponse}
          </Typography>
          {psychiatrist && (
            <Box>
              <Typography variant="h6">Recommended Psychiatrist:</Typography>
              <Typography variant="body1">
                <strong>Name:</strong> {psychiatrist.name}
              </Typography>
              <Typography variant="body1">
                <strong>Location:</strong> {psychiatrist.location}
              </Typography>
              <Typography variant="body1">
                <strong>Language:</strong> {psychiatrist.language}
              </Typography>
              <Typography variant="body1">
                <strong>Contact:</strong>{' '}
                <Link href={psychiatrist.contact} target="_blank" rel="noopener">
                  Book Appointment
                </Link>
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Counseling;