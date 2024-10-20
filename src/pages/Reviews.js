import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 4,
      comment: "Amazing experience! Saw lots of wildlife.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "A must-visit for nature lovers!",
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating > 0 && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 0, comment: "" }); // Reset form
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Visitor Reviews
      </Typography>

      {/* Review Submission Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Share Your Experience
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Rating
              name="rating"
              value={Number(newReview.rating)}
              onChange={(event, newValue) => {
                setNewReview({ ...newReview, rating: newValue });
              }}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Your Review"
              name="comment"
              multiline
              rows={2}
              value={newReview.comment}
              onChange={handleInputChange}
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
          Submit Review
        </Button>
      </Box>

      {/* Existing Reviews Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>
        {reviews.map((review, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {review.name}
                </Typography>
                <Rating name="read-only" value={review.rating} readOnly />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {review.comment}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Reviews;
