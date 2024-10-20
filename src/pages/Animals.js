import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const animals = [
  {
    name: "Lion",
    description: "King of the jungle, found roaming in Akagera.",
    image: "/images/Lion.jpeg"
  },
  {
    name: "Elephant",
    description: "Majestic animals, known for their intelligence and size.",
    image: "/images/Elephant.jpeg"
  },
  {
    name: "Giraffe",
    description: "Tall herbivores with a love for acacia trees.",
    image: "/images/Giraffe.png"
  },
  // Add more animals as needed...
];
const Animals = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Explore the Wildlife of Akagera
      </Typography>
      
      <Grid container spacing={4}>
        {animals.map((animal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={animal.name}
                height="200"
                image={animal.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {animal.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {animal.description}
                </Typography>
                <Button sx={{ marginTop: 2 }} variant="contained" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Animals;
