import React, { useState } from "react";
import {
    AppBar,
    // Avatar,
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useWindowDimensions from "../useWindowDimensions";
import LOGO from '../../assets/un-01.png';
import { height } from "@mui/system";

// import logo from '../../assets/logo-01.svg';

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
                        src={"https://res.cloudinary.com/wonder4kids/image/upload/v1636182194/logo_dhcloy.png"}
                        // src={logo}
                        width={50}
                        height={50}
                    />
                    <img
                        src={LOGO}
                        alt="Name"
                        style={{height:"50px"}}
                    />
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Button color="inherit" sx={{ px: "12px" }}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{ px: "12px" }}>
                        Learn to Use
                    </Button>
                    <Button color="inherit" sx={{ px: "12px" }}>
                        About Us
                    </Button>
                    <Button color="inherit" sx={{ px: "12px" }}>
                        Contact &amp; Feedback
                    </Button>
                    <Button color="inherit" sx={{ px: "12px" }}>
                        Developer Community
                    </Button>
                </Toolbar>
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
            <AppBar 
                sx={{ backgroundColor: bg }}
                enableColorOnDark
            >
                <Toolbar>
                    {/* <Avatar 
                        alt="logo" 
                        src={logo} 
                        variant="rounded"
                    /> */}
                    <img 
                        alt="logo"
                        src={"https://res.cloudinary.com/wonder4kids/image/upload/v1636182194/logo_dhcloy.png"}
                        // src={logo}
                        width={50}
                        height={50}
                    />

                    <img
                        src={LOGO}
                        alt="Name"
                        style={{height:"50px", width:"60%"}}
                    />
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
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
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItem>
                        <ListItem button key={"Learn to Use"}>
                            <ListItemText>
                                Learn to Use
                            </ListItemText>
                        </ListItem>
                        <ListItem button key={"About Us"}>
                            <ListItemText>
                                About Us
                            </ListItemText>
                        </ListItem>
                        <ListItem button key={"Contact & Feedback"}>
                            <ListItemText>
                                Contact &amp; Feedback
                            </ListItemText>
                        </ListItem>
                        <ListItem button key={"Developer Community"}>
                            <ListItemText>
                                Developer Community
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

function NavBar() {
    // eslint-disable-next-line no-unused-vars
    const { height, width } = useWindowDimensions();

    return (
        <Box sx={{ flexGrow: 1 }}>
            {width >= 783 ? <HorizontalAppBar /> : <VerticalDrawer />}
        </Box>
    );
};

export default NavBar;