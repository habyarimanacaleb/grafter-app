import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";
import Map from '../components/Map'; // Assuming you have a Map component for location

const Booking = () => {
  const [formData, setFormData] = useState({
    accommodation: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted", formData);
    // Handle booking submission logic here
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book Your Adventure
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Accommodation Type"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Check-in Date"
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Check-out Date"
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Number of Guests"
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Confirm Booking
        </Button>
      </Box>

      {/* Display a map with locations */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Available Accommodations</Typography>
        <Map />
      </Box>
    </Container>
  );
};

export default Booking;
