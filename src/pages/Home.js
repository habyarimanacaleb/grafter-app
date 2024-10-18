import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Akagera National Park
      </Typography>
      <Typography variant="body1" paragraph>
        Discover Rwanda’s iconic wildlife, breathtaking landscapes, and world-class
        safari experiences. Get ready to explore, learn, and be amazed.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Plan Your Visit</Typography>
          <Typography variant="body2">Learn about park fees, hours, and guidelines.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Explore the Wildlife</Typography>
          <Typography variant="body2">Meet the animals that call Akagera home.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Book Your Stay</Typography>
          <Typography variant="body2">Check available lodges and accommodation.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
