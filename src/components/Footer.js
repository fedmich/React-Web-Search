import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container style={{ marginTop: '40px', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Search App | Privacy | Terms
      </Typography>
    </Container>
  );
};

export default Footer;
