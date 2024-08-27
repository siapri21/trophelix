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
  Box,
  Avatar,
  CardActionArea
} from '@mui/material';

const CommunityPage = () => {
  const communityMembers = [
    { name: 'Jean Dupont', sport: 'Football', newCareer: 'Coach sportif', image: 'url_to_image1' },
    { name: 'Marie Martin', sport: 'Natation', newCareer: 'Nutritionniste', image: 'url_to_image2' },
    { name: 'Pierre Durand', sport: 'Tennis', newCareer: 'Entrepreneur', image: 'url_to_image3' },
  ];

  const upcomingEvents = [
    { title: 'Atelier de reconversion', date: '15 septembre 2024', image: 'https://i.pinimg.com/564x/a6/35/76/a635764502d0bf2185aeb7747370988f.jpg' },
    { title: 'Conférence sur les opportunités post-carrière', date: '3 octobre 2024', image: 'https://i.pinimg.com/564x/c6/a8/4a/c6a84a76fb3a7a50451e68ec9a7a8554.jpg' },
  ];

  const testimonials = [
    { name: 'Sophie Lefebvre', sport: 'Gymnastique', newCareer: 'Kinésithérapeute', testimonial: 'La reconversion a été un défi, mais aussi une opportunité incroyable. Mes compétences en gymnastique m\'ont donné une base solide pour ma nouvelle carrière en kinésithérapie.', image: 'url_to_avatar1' },
    { name: 'Thomas Moreau', sport: 'Rugby', newCareer: 'Consultant en management', testimonial: 'J\'ai transféré ma passion pour le travail d\'équipe du terrain de rugby au monde de l\'entreprise. Cette communauté m\'a beaucoup aidé dans ma transition.', image: 'url_to_avatar2' },
    { name: 'Lucie Bernard', sport: 'Athlétisme', newCareer: 'Professeur de sport', testimonial: 'Le soutien de la communauté a été essentiel pour moi. Je me sens maintenant prête à inspirer les autres.', image: 'url_to_avatar3' },
    { name: 'Marc Dupuis', sport: 'Cyclisme', newCareer: 'Directeur sportif', testimonial: 'Ma passion pour le cyclisme m\'a aidé à exceller dans ma nouvelle carrière. Je suis reconnaissant pour le soutien que j\'ai reçu.', image: 'url_to_avatar4' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Communauté de Reconversion Sportive
      </Typography>

      <Box my={4} display="flex" alignItems="center">
        <TextField 
          label="Votre email" 
          variant="outlined" 
          size="small" 
          sx={{ mr: 2, flexGrow: 1, maxWidth: '300px' }}
        />
        <Button variant="contained" color="primary">
          S'inscrire
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        Nos membres
      </Typography>
      <Grid container spacing={4}>
        {communityMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={member.image} alt={member.name} sx={{ width: 60, height: 60, mr: 2 }} />
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                </Box>
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
          Témoignages
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      {testimonial.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {testimonial.sport} → {testimonial.newCareer}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Événements à venir
        </Typography>
        <Grid container spacing={4}>
          {upcomingEvents.map((event, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CommunityPage;