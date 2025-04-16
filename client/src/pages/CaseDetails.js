import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import AdvocateList from '../components/AdvocateList';

function CaseDetails() {
  const [caseData, setCaseData] = useState(null);
  const [advocates, setAdvocates] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const caseResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/cases?type=${query}`);
        setCaseData(caseResponse.data);
        const advocateResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/advocates?caseType=${query}`);
        setAdvocates(advocateResponse.data);
      } catch (error) {
        console.error('Error fetching case details:', error);
        setCaseData(null);
        setAdvocates([]);
      }
    };
    if (query) fetchCaseDetails();
  }, [query]);

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h2" gutterBottom>
        Case Details
      </Typography>
      {caseData ? (
        <>
          <Typography variant="h5">{caseData.type}</Typography>
          <Typography variant="body1" paragraph>{caseData.description}</Typography>
          <Typography variant="body1" paragraph>
            <strong>Relevant Indian Laws:</strong> {caseData.laws.join(', ')}
          </Typography>
          <Button variant="contained" component={Link} to="/register" sx={{ mb: 4, bgcolor: 'accent.main' }}>
            Register to Proceed
          </Button>
          <AdvocateList advocates={advocates} />
        </>
      ) : (
        <Typography variant="body1">No case found. Try searching again.</Typography>
      )}
    </Box>
  );
}

export default CaseDetails;