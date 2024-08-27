// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Carousel from '../composantes/Carousel';
import ImageTextComponent from '../composantes/ImageComposant';
import RessourceCard from '../composantes/Resource';
import Event from '../composantes/event';
import TeamMember from '../composantes/TeamMember';
import ContactForm from '../composantes/Contact';


export default function Home() {
  return (
    <Container className="flex  justify-center items-center min-h-screen max-w-4xl  p-6">
      <Grid container spacing={5} className='flex justify-center' >
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
        <Grid>
          <ContactForm />
        </Grid>
        </Grid>
    </Container>
  );
}

