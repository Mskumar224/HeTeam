import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Sidebar() {
  const quickLinks = [
    { label: 'Case Search', path: '/case-details' },
    { label: 'Register Case', path: '/register' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Support', path: '/register' },
  ];

  return (
    <Box className="sidebar">
      <Typography variant="h6" gutterBottom>
        Quick Links
      </Typography>
      <List>
        {quickLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText>
              <Link component={RouterLink} to={link.path} color="text.primary" underline="hover">
                {link.label}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;