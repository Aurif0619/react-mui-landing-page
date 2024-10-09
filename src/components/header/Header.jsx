import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LOGO from "../assets/Logo.png";
import { Link } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={LOGO} alt="Logo" sx={{ marginRight: '20px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
              <Box sx={{ display: 'flex', gap: 2, marginStart: "3px", marginLeft: "30px", }}>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "55px" }}>Home</Typography>
                </Link>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "49px" }}>Services</Typography>
                </Link>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "49px" }}>Feature</Typography>
                </Link>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "49px" }}>Product</Typography>
                </Link>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "49px" }}>Testimonial</Typography>
                </Link>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "#fff", marginLeft: "49px" }}>FAQ</Typography>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginRight: "23px" }}>
                <Link component="button" variant="body1">
                  <Typography variant="body1" sx={{ color: "green", marginRight: "23px" }}>Login</Typography>
                </Link>
                <Button variant="contained" sx={{ background: "green" }}>Sign Up</Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
