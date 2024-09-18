
import React, { useState, useEffect } from 'react';
import { Container, Grid, CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Sidebar from './components/Sidebar';

const API_BASE_URL = 'https://rack.fedmich.com/api/se-web/';


function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark theme
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('react'); // Default query

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
background: {
        default: darkMode ? '#121212' : '#F1F1F1', // Light theme background color
      },
    },
    shape: {
      borderRadius: 12, // Rounded corners for cards
    },
  });

  const buildApiUrl = (query) => {
    const firstLetter = query.charAt(0).toLowerCase();
    const formattedQuery = query.toLowerCase();
    return `${API_BASE_URL}r/${firstLetter}/${formattedQuery}.json`;
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const apiUrl = buildApiUrl(searchQuery);
    axios.get(apiUrl)
      .then(response => setResults(response.data.results || []))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleThemeChange = () => setDarkMode(!darkMode);

  const isLargeScreen = useMediaQuery('(min-width:1200px)'); // For large desktop view

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onThemeChange={handleThemeChange} setQuery={setQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Results results={results} query={query} />
          </Grid>
          {isLargeScreen && (
            <Grid item md={3}>
              <Sidebar query={query} />
            </Grid>
          )}
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
