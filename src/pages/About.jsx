import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Qui sommes-nous ?
      </Typography>

      <Box my={4}>
        <Typography variant="h5" paragraph>
          Nous sommes une organisation dédiée à la reconversion des sportifs de haut niveau. Notre mission est d'accompagner les athlètes dans leur transition vers une nouvelle carrière, en leur fournissant les outils, les ressources et le soutien nécessaires pour réussir.
        </Typography>
        <Typography variant="h5" paragraph>
          Notre équipe est composée de professionnels expérimentés dans les domaines du sport, de la psychologie, de la formation professionnelle et du développement personnel. Nous croyons fermement que les compétences acquises au cours d'une carrière sportive peuvent être transférées avec succès dans le monde professionnel.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom>
        Nos Valeurs
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300" // Remplacez par une vraie image
              alt="Valeur 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Intégrité
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nous agissons avec honnêteté et transparence dans toutes nos interactions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300" // Remplacez par une vraie image
              alt="Valeur 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Respect
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nous valorisons chaque individu et respectons leurs parcours uniques.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300" // Remplacez par une vraie image
              alt="Valeur 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nous nous engageons à fournir des services de la plus haute qualité.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Notre Histoire
        </Typography>
        <Typography variant="body1" paragraph>
          Fondée en [année], notre organisation a été créée par des anciens athlètes qui ont personnellement vécu les défis de la reconversion. Nous avons décidé d'unir nos forces pour aider d'autres sportifs à naviguer cette période de transition avec succès.
        </Typography>
        <Typography variant="body1" paragraph>
          Depuis notre création, nous avons aidé des centaines d'athlètes à trouver leur voie dans le monde professionnel, en leur offrant des formations, des conseils et un soutien personnalisé.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUsPage;