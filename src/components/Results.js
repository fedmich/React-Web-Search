import React, { useState } from 'react';
import { List, ListItem, Card, CardContent, CardActionArea, Typography, Grid } from '@mui/material';
import { getPlaceholderImage } from '../helpers/ImageHelpers'; // Adjust the path as needed
import NoResults from './NoResults'; // Import NoResults component

const Results = ({ results, searchQuery }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleLinkClick = (e, url, domain, videoId) => {    
    if (domain.includes('youtube')) {
      e.preventDefault(); // Prevent opening a new tab
      setActiveVideoId(videoId || null);
    } else {
      setActiveVideoId(null);
    }
  };

  const extractVideoId = (url) => {
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1];
    }
    return videoId;
  };

  return (
    <List>
      {results.length > 0 ? results.map((item, index) => {
        const videoId = extractVideoId(item.u);
        return (
          <ListItem key={index} style={{ padding: '10px' }}>
            <Card variant="outlined" style={{ width: '100%', borderRadius: '12px', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <CardActionArea
                component="a"
                href={item.u}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(e, item.u, item.d, videoId)}
                style={{ display: 'flex' }}
              >
                {/* Thumbnail Image */}
                <img
                  src={item.img || getPlaceholderImage(item.u, item.d)}
                  alt={item.d}
                  style={{ width: '150px', height: '100px', objectFit: 'cover', marginRight: '15px', borderRadius: '8px' }}
                />
                <CardContent style={{ flex: 1, padding: '10px' }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.t}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.d}
                  </Typography>
                  {item.p && <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                    {item.p}
                  </Typography>}
                </CardContent>
              </CardActionArea>
              {activeVideoId === videoId && (
                <div style={{ marginTop: '10px' }}>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${activeVideoId}?rel=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </Card>
          </ListItem>
        );
      }) : (
        <NoResults query={searchQuery} />
      )}
    </List>
  );
};

export default Results;
