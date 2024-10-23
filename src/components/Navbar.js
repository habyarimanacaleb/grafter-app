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
  Divider,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240; // Drawer width

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme(); // Get theme for directional icons

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Animals", path: "/animals" },
    { title: "Reviews", path: "/reviews" },
    { title: "Booking", path: "/booking" },
  ];

  return (
    <AppBar
      position="fixed"
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
        {/* MenuIcon for mobile devices */}
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            size="25px"
            aria-label="menu"
            onClick={() => toggleDrawer(true)} // Open drawer
          >
            <MenuIcon />
          </IconButton>
        ) : (
          /* Show Logo (ForestIcon) only on larger screens */
          <IconButton
            edge="start"
            component={Link}
            to="/"
            sx={{
              color: "white",
              borderRadius: "50%",
              padding: 1,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
            className="logo_icon"
          >
            <ForestIcon style={{ fontSize: "60px" }} />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grafter Park
        </Typography>

        {isMobile ? (
          <>
            {/* Drawer for Mobile Menu */}
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="temporary"
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)} // Close drawer
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={() => toggleDrawer(false)}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>

              <Divider />
              <List>
                {navLinks.map((item, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    component={Link}
                    to={item.path}
                    onClick={() => toggleDrawer(false)}
                    selected={location.pathname === item.path}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Divider />

              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
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
