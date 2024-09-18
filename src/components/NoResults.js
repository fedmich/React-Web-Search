import React from 'react';
import { Typography, Box } from '@mui/material';

const NoResults = ({ query }) => {
  return (
    <Box textAlign="center" marginTop="20px">
      <Typography variant="h6" color="textSecondary">
        No results found for "{query}".
      </Typography>
    </Box>
  );
};

export default NoResults;
