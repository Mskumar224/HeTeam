import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function AdvocateList({ advocates }) {
  return (
    <Box sx={{ my: 4, p: 2, bgcolor: 'background.paper', border: '1px solid #D1D5DB' }}>
      <Typography variant="h5" gutterBottom>
        Recommended Advocates
      </Typography>
      <List>
        {advocates.map((advocate, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={`${advocate.name} - ${advocate.specialization}`}
                secondary={`Location: ${advocate.location} | Language: ${advocate.language}`}
              />
            </ListItem>
            {index < advocates.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default AdvocateList;