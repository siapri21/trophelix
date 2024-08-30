import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Box,
  Avatar,
  CardActionArea
} from '@mui/material';
import { keyframes } from '@mui/system';

// Animation de défilement pour la citation
const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function Community () {
  const communityMembers = [
    { name: 'Jean Dupont', sport: 'Football', newCareer: 'Coach sportif', image: 'url_to_image1' },
    { name: 'Marie Martin', sport: 'Natation', newCareer: 'Nutritionniste', image: 'url_to_image2' },
    { name: 'Pierre Durand', sport: 'Tennis', newCareer: 'Entrepreneur', image: 'url_to_image3' },
  ];

  const upcomingEvents = [
    { title: 'Atelier de reconversion', date: '15 septembre 2024', image: '../assets/img/4246b4b68f587bc984048dac1aa9266c-removebg-preview.png' },
    { title: 'Conférence sur les opportunités post-carrière', date: '3 octobre 2024', image: '../assets/img/185405565_10753323-removebg-preview.png' },
    { title: 'Séminaire sur le développement personnel', date: '20 octobre 2024', image: '../assets/img/30274af8d4e72e272c068574ec97ede8-removebg-preview.png' },
    { title: 'Webinaire sur la gestion de carrière', date: '5 novembre 2024', image: '../assets/img/birthday-greeting-card-template.png' },
  ];

  const testimonials = [
    { name: 'Sophie Lefebvre', sport: 'Gymnastique', newCareer: 'Kinésithérapeute', testimonial: 'La reconversion a été un défi, mais aussi une opportunité incroyable. Mes compétences en gymnastique m\'ont donné une base solide pour ma nouvelle carrière en kinésithérapie.', image: 'url_to_avatar1' },
    { name: 'Thomas Moreau', sport: 'Rugby', newCareer: 'Consultant en management', testimonial: 'J\'ai transféré ma passion pour le travail d\'équipe du terrain de rugby au monde de l\'entreprise. Cette communauté m\'a beaucoup aidé dans ma transition.', image: 'url_to_avatar2' },
    { name: 'Lucie Bernard', sport: 'Athlétisme', newCareer: 'Professeur de sport', testimonial: 'Le soutien de la communauté a été essentiel pour moi. Je me sens maintenant prête à inspirer les autres.', image: 'url_to_avatar3' },
    { name: 'Marc Dupuis', sport: 'Cyclisme', newCareer: 'Directeur sportif', testimonial: 'Ma passion pour le cyclisme m\'a aidé à exceller dans ma nouvelle carrière. Je suis reconnaissant pour le soutien que j\'ai reçu.', image: 'url_to_avatar4' },
  ];

  return (
    <Container maxWidth="lg">
      <Box my={4} textAlign="center" overflow="hidden">
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            background: `linear-gradient(45deg, #008CBA 30%, #FF9800 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
            animation: `${scrollAnimation} 20s linear infinite`,
          }}
        >
          "Transformez votre passion sportive en une carrière épanouissante"
        </Typography>
        <Button 
          component={Link}
          to="/contact"
          variant="contained" 
          sx={{ 
            mt: 2, 
            bgcolor: '#008CBA',
            color: '#ffffff',
            '&:hover': {
              bgcolor: '#005f7f',
            }
          }}
        >
          Rejoignez-nous
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, color: '#008CBA' }}>
        Nos membres
      </Typography>
      <Grid container spacing={2}>
        {communityMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#f9f9f9', boxShadow: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={member.image} alt={member.name} sx={{ width: 40, height: 40, mr: 2 }} />
                  <Typography variant="h6" component="div" sx={{ fontSize: '1rem', color: '#333' }}>
                    {member.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="#555">
                  Ancien sport : {member.sport}
                </Typography>
                <Typography variant="body2" color="#555">
                  Nouvelle carrière : {member.newCareer}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box my={4}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, color: '#008CBA' }}>
          Témoignages
        </Typography>

        <Grid container spacing={2}>
  {testimonials.map((testimonial, index) => (
    <Grid item key={index} xs={12} sm={6}>
      <Card 
        sx={{ 
          height: '100%',  // Assure que toutes les cartes ont la même hauteur
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
          color: '#ffffff'
        }}
      >
        <CardContent 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%'  // Remplit toute la hauteur de la Card
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 40, height: 40, mr: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
              {testimonial.name}
            </Typography>
          </Box>
          <Typography variant="body2" gutterBottom>
            {testimonial.sport} → {testimonial.newCareer}
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>  {/* Utilise l'espace restant */}
            "{testimonial.testimonial}"
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, color: '#008CBA' }}>
          Événements à venir
        </Typography>
        <Grid container spacing={2}>
          {upcomingEvents.map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ border: '1px solid #008CBA' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={event.image}
                    alt={event.title}
                    sx={{ objectFit: 'contain' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1rem', color: '#008CBA' }}>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="#555">
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
}