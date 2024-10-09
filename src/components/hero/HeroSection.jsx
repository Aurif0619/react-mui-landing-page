import React from 'react'
import Illustrate from "../assets/Illustration.png";
import { Box, Button, Container, Typography } from '@mui/material';
const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F7FA", padding: 5 }}>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Lesson and Insights</Typography>
          <Typography variant="h3" sx={{ color: "green", marginTop: 1 }}>from 8 years</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Where you grow your business as a photographer... site or social media
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "green", marginTop: 3 }}>Register</Button>
        </Box>
        <Box>
          <img src={Illustrate} sx={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection;