import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import Image from '../assets/img/portrait-femme-competition-au-championnat-jeux-olympiques.png'
import { Link } from 'react-router-dom';

export default  function ImageTextComponent() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 900, m: 8 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
        <CardMedia
           component="img"
           sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
           image= {Image}
           alt="Travail d'équipe"
/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
            <CardContent>
              <Typography component="h2" variant="h5" gutterBottom>
              " <strong style={{color:'orange'}}>Trophelix</strong> Optimise la reconversion <em style={{color: '#8A2BE2'}}>des sports pros</em>
             " </Typography>
              <Typography variant="body1" color="text.secondary">
              Trophelix regroupe les acteurs de la reconversion pros dans une plateforme pour optimiser la transition des athlètes.
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Button variant="outlined"
                sx={{ 
                  m: 2, 
                  bgcolor: '#008CBA',
                  color: '#ffffff',
                  '&:hover': {
                    bgcolor: '#005f7f',
                  }
                }} 
               component={Link}
          to="/qui-sommes-nous" >Qui-sommes-nous</Button>
            </Box>
        </Grid>
      </Grid>
    </Card>
  );
};


//Nous utilisons Card comme conteneur principal.
// Grid est utilisé pour créer une mise en page responsive.
// CardMedia affiche l'image.
// CardContent contient le texte.
// Typography est utilisé pour le titre et la description.
