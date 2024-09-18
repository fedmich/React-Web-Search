import React from 'react';
import { List, ListItem, Card, CardContent, CardActionArea, Typography } from '@mui/material';

const Results = ({ results, query }) => {
  return (
    <List>
      {results.length > 0 ? results.map((item, index) => (
        <ListItem key={index}>
          <Card variant="outlined" style={{ width: '100%', margin: '10px 0', borderRadius: '12px' }}>
            <CardActionArea component="a" href={item.u} target="_blank" rel="noopener noreferrer">
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.t}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.d} {item.p && `— ${item.p}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
      )) : (
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
          No results found for "{query}".
        </Typography>
      )}
    </List>
  );
};

export default Results;
