import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 99, 71, 0.5)" }, // Add shadow on hover
};

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 3}}>
      {/* Animated Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: -35 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Animate to visible and move down
        transition={{ duration: 1 }} // Animation duration
      >
        <Typography variant="h2" gutterBottom align="center" color="primary">
          Welcome to Grafter  Park
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1.5, delay: 0.5 }} // Delay animation for smoother effect
      >
        <Typography variant="h5" align="center" color="textSecondary">
          Experience the Majesty of Nature
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Discover Rwanda’s iconic wildlife, breathtaking landscapes, and
          world-class safari experiences. Get ready to explore, learn, and be
          amazed.
        </Typography>
      </motion.div>

      {/* Sections with Call-to-Action Buttons */}
      <Grid
        container
        spacing={2}
        justifyContent="center" // Centers the content horizontally
        alignItems="center" // Centers the content vertically
        style={{ minHeight: '35vh', marginTop: "10px" }} // Ensures it takes at least 35% of viewport height
      >
        <Grid item xs={12} sm={6} md={4}>
          <motion.div variants={buttonVariants}  initial="initial">
            <Button variant="contained" color="primary" fullWidth component={Link} to='/plan-your-visit'>
              Plan Your Visit
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div variants={buttonVariants}  initial="initial">
            <Button variant="contained" color="secondary" fullWidth component={Link} to='/explore-wildlife'>
              Explore the Wildlife
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div variants={buttonVariants}  initial="initial">
            <Button variant="contained" color="success" fullWidth component={Link} to='/book-your-stay'>
              Book Your Stay
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      {/* Additional Animated Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
          padding: 4,
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fafafa'
        }}
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }} // Start hidden and small
          animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
          transition={{ duration: 1, delay: 1 }} // Animation duration
        >
          Join Us for an Unforgettable Adventure!
        </motion.h3>
        <Typography variant="body1" paragraph>
          Whether you are a wildlife enthusiast, a nature lover, or just looking to unwind, Grafter  Park offers the perfect escape.
        </Typography>
        <motion.div variants={buttonVariants}  initial="initial">
          <Button variant="contained" color="warning">
            Learn More
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
