import React, { useState } from "react";
import "./Home.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../useWindowDimensions";
import Login from "../Login/Login";

const HorizontalAppBar = () => {
  const bg = "#882093";

  return (
    <React.Fragment>
      <AppBar
        // color="transparent"
        // color={bg}
        sx={{ backgroundColor: bg }}
        enableColorOnDark
      >
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <Link to="/home">
            <Button color="inherit" sx={{ px: "12px" }}>
              Home
            </Button>
          </Link>
          <Link to="/learn-to-use">
            <Button color="inherit" sx={{ px: "12px" }}>
              Learn to Use
            </Button>
          </Link>
          <Link to="/about-us">
            <Button color="inherit" sx={{ px: "12px" }}>
              About Us
            </Button>
          </Link>
          <Link to="/contact-feedback">
            <Button color="inherit" sx={{ px: "12px" }}>
              Contact &amp; Feedback
            </Button>
          </Link>
          <Link to="/developer-community">
            <Button color="inherit" sx={{ px: "12px" }}>
              Developer Community
            </Button>
          </Link>
          <Link to="/login">
            <Button color="inherit" sx={{ px: "12px" }}>
              Login
            </Button>
          </Link>
        </Toolbar>
        <Outlet />
      </AppBar>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toolbar />
    </React.Fragment>
  );
};

const VerticalDrawer = () => {
  const bg = "#882093";
  const drawerBg = "#FFE381";
  const [drawer, setDrawer] = useState(false);

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: bg }} enableColorOnDark>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: drawerBg,
            height: "inherit",
          }}
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={() => setDrawer(false)}
            sx={{ m: 1, p: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <Divider />
          <List>
            <ListItem button key={"Home"}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button key={"Learn to Use"}>
              <ListItemText>Learn to Use</ListItemText>
            </ListItem>
            <ListItem button key={"About Us"}>
              <ListItemText>About Us</ListItemText>
            </ListItem>
            <ListItem button key={"Contact & Feedback"}>
              <ListItemText>Contact &amp; Feedback</ListItemText>
            </ListItem>
            <ListItem button key={"Developer Community"}>
              <ListItemText>Developer Community</ListItemText>
            </ListItem>
            <ListItem button key={"Login"}>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          {width >= 783 ? <HorizontalAppBar /> : <VerticalDrawer />}
        </Box>
      </div>
    </div>
  );
}
