import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
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
import LOGO from "../../assets/un-01.png";

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
          {/* <Avatar 
                        alt="logo" 
                        src={logo} 
                        variant="rounded"
                        sx={{ width: 56, height: 56 }}
                    /> */}
          <img
            alt="logo"
            src={
              "https://res.cloudinary.com/wonder4kids/image/upload/v1636182194/logo_dhcloy.png"
            }
            // src={logo}
            width={50}
            height={50}
          />
          <img src={LOGO} alt="Name" style={{ height: "50px" }} />
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <Link to="/">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">Home</Typography>
            </Button>
          </Link>
          <Link to="/learn-to-use">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">Learn To Use</Typography>
            </Button>
          </Link>
          <Link to="/about-us">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">About Us</Typography>
            </Button>
          </Link>
          <Link to="/contact-feedback">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">Contact &amp; Feedback</Typography>
            </Button>
          </Link>
          <Link to="/developer-community">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">Developer Community</Typography>
            </Button>
          </Link>
          <Link to="/login">
            <Button color="inherit" sx={{ px: "12px" }}>
              <Typography color="white">Login</Typography>
            </Button>
          </Link>
        </Toolbar>
        <Outlet />
      </AppBar>
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
          {/* <Avatar 
                        alt="logo" 
                        src={logo} 
                        variant="rounded"
                    /> */}
          <img
            alt="logo"
            src={
              "https://res.cloudinary.com/wonder4kids/image/upload/v1636182194/logo_dhcloy.png"
            }
            // src={logo}
            width={50}
            height={50}
          />

          <img src={LOGO} alt="Name" style={{ height: "50px", width: "60%" }} />
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
              <Link to="/">
                <ListItemText><Typography color="black">Home</Typography></ListItemText>
              </Link>
            </ListItem>
            <ListItem button key={"Learn to Use"}>
              <Link to="/learn-to-use">
                <ListItemText><Typography color="black">Learn To Use</Typography></ListItemText>
              </Link>
            </ListItem>
            <ListItem button key={"About Us"}>
              <Link to="/about-us">
                <ListItemText><Typography color="black">About Us</Typography></ListItemText>
              </Link>
            </ListItem>
            <ListItem button key={"Contact & Feedback"}>
              <Link to="/contact-feedback">
                <ListItemText><Typography color="black">Contact &amp; Feedback</Typography></ListItemText>
              </Link>
            </ListItem>
            <ListItem button key={"Developer Community"}>
              <Link to="/developer-community">
                <ListItemText><Typography color="black">Developer Community</Typography></ListItemText>
              </Link>
            </ListItem>
            <ListItem button key={"Login"}>
              <Link to="/login">
                <ListItemText><Typography color="black">Login</Typography></ListItemText>
              </Link>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
      <Outlet />
    </React.Fragment>
  );
};

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {width >= 1000 ? <HorizontalAppBar /> : <VerticalDrawer />}
    </Box>
  );
}

export default Navbar;
