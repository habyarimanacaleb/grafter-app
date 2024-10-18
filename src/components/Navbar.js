import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery'; // For responsiveness

const Navbar = () => {
  const location = useLocation(); // To track the active route
  const isMobile = useMediaQuery('(max-width:600px)'); // Mobile view detection
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer
  const [scrolled, setScrolled] = useState(false); // State for scroll effect

  // Toggle Drawer for mobile menu
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Scroll effect to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Links for navigation
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Animals', path: '/animals' },
    { title: 'Reviews', path: '/reviews' },
    { title: 'Booking', path: '/booking' },
  ];

  return (
    <AppBar position="static" color={scrolled ? "primary" : "transparent"} style={{ transition: '0.5s ease', boxShadow: scrolled ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none' }}>
      <Toolbar>
        <ForestIcon style={{ marginRight: 8 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Akagera National Park
        </Typography>

        {isMobile ? (
          <>
            {/* Mobile Menu Button */}
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile Menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
              <List>
                {navLinks.map((item, index) => (
                  <ListItem button key={index} component={Link} to={item.path} onClick={() => toggleDrawer(false)} selected={location.pathname === item.path}>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop navigation links
          <div>
            {navLinks.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  marginLeft: 2,
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal', // Highlight active link
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none', // Underline active link
                  transition: 'border-bottom 0.3s ease',
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
