// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Carousel from '../composantes/Carousel';
import ImageTextComponent from '../composantes/ImageComposant';
import RessourceCard from '../composantes/Resource';
import Event from '../composantes/event';
import { EventRounded } from '@mui/icons-material';
import TeamMember from '../composantes/TeamMember';


export default function Home() {
  return (
    <Container className="py-8">
      <Grid container spacing={4}>
        <Grid item xs={12} md={11}>
          <Carousel />
        </Grid>
        <Grid item >
        <ImageTextComponent/>
        </Grid>
        <Grid>
          <RessourceCard/>
        </Grid>
        <Grid>
          <Event/>
        </Grid>
        <Grid>
          <TeamMember/>
        </Grid>
        </Grid>
    </Container>
  );
}