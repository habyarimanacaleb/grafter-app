import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
// Sample background image URL
const backgroundImage =
  "https://www.istockphoto.com/photo/group-of-zebras-in-akagera-national-park-rwanda-gm1253325663-365987858";
// Animal data
const animals = [
  {
    name: "Lion",
    description: "King of the jungle, found roaming in Akagera.",
    image: "/images/Lion.jpeg",
  },
  {
    name: "Elephant",
    description: "Majestic animals, known for their intelligence and size.",
    image: "/images/Elephant.jpeg",
  },
  {
    name: "Giraffe",
    description: "Tall herbivores with a love for acacia trees.",
    image: "/images/Giraffe.png",
  },
  // Add more animals as needed...
];

const Animals = () => {
  const handleLearnMore = (animal) => {
    // Function to handle "Learn More" click
    console.log(animal.name);
  };

  return (
    <Container sx={{ marginTop: 4, padding: 0 }}>
      {/* Background section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 300,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            padding: 2,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Explore the Wildlife of Akagera
          </Typography>
          <Typography variant="h6">
            Discover the diverse and magnificent animals that roam the Akagera
            National Park.
          </Typography>
        </Box>
      </Box>

      {/* Animal cards */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {animals.map((animal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={animal.name}
                height="200"
                image={animal.image}
                onError={(e) => {
                  e.target.src = "/path/to/fallback/image.jpg"; // Fallback image
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {animal.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {animal.description}
                </Typography>
                <Button
                  sx={{ marginTop: 2 }}
                  variant="contained"
                  color="primary"
                  onClick={() => handleLearnMore(animal)}
                >
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
