// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Carousel from '@/components/Carousel';
import ImageTextComponent from '@/components/ImageComposant';
import Event from '@/components/event';
import TeamMember from '@/components/TeamMember';
import ContactForm from '@/components/Contact';
import RessourceCard from '@/components/Resource';


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

