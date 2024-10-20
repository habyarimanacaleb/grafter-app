import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest"; // Correctly importing the ForestIcon
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery"; // For responsiveness

const Navbar = () => {
  const location = useLocation(); // To track the active route
  const isMobile = useMediaQuery("(max-width:600px)"); // Mobile view detection
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer
  const [scrolled, setScrolled] = useState(false); // State for scroll effect

  // Toggle Drawer for mobile menu
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Scroll effect to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Simplified
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Links for navigation
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Animals", path: "/animals" },
    { title: "Reviews", path: "/reviews" },
    { title: "Booking", path: "/booking" },
  ];

  return (
    <AppBar
      position="static"
      color={scrolled ? "primary" : "transparent"}
      style={{
        color: "white",
        transition: "0.5s ease",
        boxShadow: scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.2)" : "none",
        background:
          "linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(169,169,169,1) 100%)",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start" // Place this on IconButton to position it correctly
          component={Link} // Ensure it links to the home page
          to="/"
          sx={{
            color: "white", // Set icon color to white for visibility
            borderRadius: "50%", // Make it circular
            padding: 1, // Add padding for better appearance
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background on hover
            },
          }}
        >
          <ForestIcon style={{ fontSize: "60px" }} /> {/* Increased size for better visibility */}
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Akagera National Park
        </Typography>

        {isMobile ? (
          <>
            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="inherit"
              size="25px"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile Menu */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
              aria-label="Main Navigation-menu"
              sx={{
                width: "100%",
                padding: "10px",
              }}
            >
              <List>
                {navLinks.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={item.path}
                    onClick={() => toggleDrawer(false)}
                    selected={location.pathname === item.path}
                  >
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {navLinks.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  marginLeft: 2,
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  borderBottom:
                    location.pathname === item.path
                      ? "2px solid white"
                      : "none",
                  transition: "border-bottom 0.3s ease",
                }}
              >
                {item.title}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
