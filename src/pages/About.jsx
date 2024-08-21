// src/pages/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Qui sommes-nous</Typography>
      <Typography paragraph>Nous sommes une entreprise innovante...</Typography>
    </Container>
  );
}