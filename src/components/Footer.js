import React from "react";
import { Container, Grid, Typography, Button, Link, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn"; 

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        padding: 4,
        marginTop: "auto",
        background:
          "linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(169,169,169,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Navigation Links */}
          <Grid item xs={12} md={4} className="footer-navigations" sx={{
            sm:{display:'block'},
            md:{display:'flex'}
          }}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <Link href="/" color="inherit" underline="none">
              <Button sx={{color:'white'}}>Home</Button>
            </Link>
            <Link href="/animals" color="inherit" underline="none">
              <Button sx={{color:'white'}}>Animals</Button>
            </Link>
            <Link href="/reviews" color="inherit" underline="none">
              <Button sx={{color:'white'}}>Reviews</Button>
            </Link>
            <Link href="/booking" color="inherit" underline="none">
              <Button sx={{color:'white'}}>Booking</Button>
            </Link>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={4} className="footer-social-icons">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://instagram.com" underline="none">
              <InstagramIcon />
            </Link>
            <Link
              href="https://twitter.com"
              underline="none"
              sx={{ marginLeft: 2 }}
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://facebook.com"
              underline="none"
              sx={{ marginLeft: 2 }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.whatsapp.com"
              underline="none"
              sx={{ marginLeft: 2 }}
            >
              <WhatsAppIcon />
            </Link>
          </Grid>

          {/* FAQs and Policies */}
          <Grid item xs={12} md={4} className="footer-informs">
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Link href="/faqs" color="white" underline="none">
              <Button sx={{color:'white'}}>FAQs</Button>
            </Link>
            <Link href="/policies" color="white" underline="none">
              <Button sx={{color:'white'}}>Policies & Regulations</Button>
            </Link>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>Email: contact@akagerapark.com</Typography>
            <Typography>WhatsApp: +250 123 456 789</Typography>
            <Typography>Phone: +250 987 654 321</Typography>
          </Grid>

          {/* Map Location */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ marginRight: 1 }} />
              <Typography>Akagera National Park, Rwanda</Typography>
            </Box>
            <Box
              sx={{
                height: 200,
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                marginTop: 2,
              }}
            >
              <iframe
                title="Map of Akagera National Park"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.036165818484!2d30.873698847800823!3d-1.9577716881799897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dff882bcbcb81f%3A0x8678f3e1741f3469!2sAkagera%20National%20Park!5e0!3m2!1sen!2srw!4v1607860314653!5m2!1sen!2srw"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
