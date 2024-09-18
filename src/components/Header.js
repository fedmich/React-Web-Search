import React from 'react';
import { AppBar, Toolbar, Typography, Switch, TextField } from '@mui/material';

const Header = ({ darkMode, onThemeChange, setQuery, setSearchQuery }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Placeholder for logo */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src="rect-logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          Search App
        </Typography>
        <Switch checked={darkMode} onChange={onThemeChange} />
        <TextField
          variant="outlined"
          label="Search"
          size="small"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setSearchQuery(e.target.value);
            }
          }}
          style={{ marginLeft: '20px' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
