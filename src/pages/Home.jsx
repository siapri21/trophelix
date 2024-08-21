// src/pages/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Accueil</Typography>
      <Typography paragraph>Bienvenue sur notre site !</Typography>
    </Container>
  );
}

export default Home;
