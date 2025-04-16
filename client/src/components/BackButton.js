import React from 'react';
import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack'; // Explicit import
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBack />}
      onClick={() => navigate(-1)}
      sx={{
        mb: 2,
        color: 'secondary.main',
        borderColor: 'secondary.main',
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'background.default',
        },
      }}
    >
      Back
    </Button>
  );
}

export default BackButton;