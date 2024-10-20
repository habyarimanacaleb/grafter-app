import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Booking = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the booking submission logic here
    console.log("Booking details:", {
      name,
      selectedHotel,
      checkInDate,
      checkOutDate,
    });
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book Your Stay
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="hotel-select-label">Select Hotel/Lodge</InputLabel>
              <Select
                labelId="hotel-select-label"
                value={selectedHotel}
                onChange={handleHotelChange}
                label="Select Hotel/Lodge"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Akagera Lodge">Akagera Lodge</MenuItem>
                <MenuItem value="Mantis Akagera Game Lodge">Mantis Akagera Game Lodge</MenuItem>
                <MenuItem value="Kigali Serena Hotel">Kigali Serena Hotel</MenuItem>
                <MenuItem value="Nyungwe House">Nyungwe House</MenuItem>
                {/* Add more hotel/lodge options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Check-In Date"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Check-Out Date"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Submit Booking
        </Button>
      </Box>
    </Container>
  );
};

export default Booking;
