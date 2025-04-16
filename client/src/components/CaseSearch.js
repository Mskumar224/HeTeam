import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CaseSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/case-details?query=${query}`);
    }
  };

  return (
    <Box sx={{ my: 4, p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h5" gutterBottom>
        Search Your Case
      </Typography>
      <TextField
        fullWidth
        label="Enter case type (e.g., Divorce, Property)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 2 }}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSearch} sx={{ bgcolor: 'accent.main' }}>
        Search
      </Button>
    </Box>
  );
}

export default CaseSearch;