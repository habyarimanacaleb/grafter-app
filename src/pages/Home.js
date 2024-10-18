import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      {/* Animated Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: -35 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Animate to visible and move down
        transition={{ duration: 1 }} // Animation duration
      >
        <Typography variant="h2" gutterBottom align="center" color="primary">
          Welcome to Akagera National Park
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1.5, delay: 0.5 }} // Delay animation for smoother effect
      >
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
        style={{ minHeight: '25vh',marginTop: "30px" }} // Ensures it takes at least 80% of viewport height
      >
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover={{ scale: 1.02 }} // Button hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button variant="contained" color="primary" fullWidth>
              Plan Your Visit
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button variant="contained" color="secondary" fullWidth>
              Explore the Wildlife
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button variant="contained" color="success" fullWidth>
              Book Your Stay
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
