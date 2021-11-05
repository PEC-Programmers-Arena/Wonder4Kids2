import React from "react";
// import {
//     Container,
//     Nav,
//     Navbar,
//     NavDropdown,
// } from "react-bootstrap"
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';

function NavBar() {
    const bg = "#882093";

    return (
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color="transparent"
                // color={bg}
                enableColorOnDark
            >
                <Toolbar>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Typography>
                        hi
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;