import React from 'react';
import { Typography, Paper } from '@mui/material';

const Sidebar = ({ query }) => {
  return (
    <Paper style={{ padding: '20px', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom>
        About the Search
      </Typography>
      {query && (
        <Typography variant="body2" color="textSecondary">
          Current Query: <strong>{query}</strong>
        </Typography>
      )}
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, nulla non suscipit dictum, mauris nisi gravida velit.
      </Typography>
    </Paper>
  );
};

export default Sidebar;
