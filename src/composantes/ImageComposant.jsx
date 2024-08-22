import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import Image from '../assets/img/travail-equipe-entreprises-se-joignent-ensemble-concept-travail-equipe-commerciale.png'

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
               lorem
              </Typography>
              <Typography variant="body1" color="text.secondary">
              description
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="outlined">Qui-sommes-nous</Button>
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
