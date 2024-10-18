import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Akagera National Park
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Animals</Button>
        <Button color="inherit">Reviews</Button>
        <Button color="inherit">Booking</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
