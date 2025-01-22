import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./NavBar.css";

const Navbar = () => (
  <AppBar position="sticky" className="navbar">
    <Toolbar>
      <div className="navbar-logo">
        <Typography variant="h6" className="logo-text">
          Logo
        </Typography>
      </div>

      <Box className="navbar-links">
        <Button className="navbar-button" component={Link} to="/home">
          Home
        </Button>
        <Button className="navbar-button" component={Link} to="/about">
          About
        </Button>
        <Button className="navbar-button" component={Link} to="/contact">
          Contact
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
