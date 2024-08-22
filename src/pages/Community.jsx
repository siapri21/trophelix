import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  TextField,
  Box
} from '@mui/material';

const CommunityPage = () => {
  const communityMembers = [
    { name: 'Jean Dupont', sport: 'Football', newCareer: 'Coach sportif', image: 'url_to_image1' },
    { name: 'Marie Martin', sport: 'Natation', newCareer: 'Nutritionniste', image: 'url_to_image2' },
    { name: 'Pierre Durand', sport: 'Tennis', newCareer: 'Entrepreneur', image: 'url_to_image3' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Communauté de Reconversion Sportive
      </Typography>

      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Rejoignez notre communauté
        </Typography>
        <TextField fullWidth label="Votre email" variant="outlined" margin="normal" />
        <Button variant="contained" color="primary">
          S'inscrire à la newsletter
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        Nos membres
      </Typography>
      <Grid container spacing={4}>
        {communityMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ancien sport : {member.sport}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nouvelle carrière : {member.newCareer}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Forum de discussion
        </Typography>
        <Button variant="outlined" color="primary">
          Accéder au forum
        </Button>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Événements à venir
        </Typography>
        <Typography variant="body1">
          Atelier de reconversion - 15 septembre 2024
        </Typography>
        <Typography variant="body1">
          Conférence sur les opportunités post-carrière - 3 octobre 2024
        </Typography>
      </Box>
    </Container>
  );
};

export default CommunityPage;