import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const About = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const values = [
    {
      title: "Adaptation",
      quote: "La reconversion est une nouvelle compétition, avec de nouvelles règles à maîtriser.",
      author: "Ancien athlète olympique",
      color: "rgba(255, 215, 0, 0.8)",
      font: "'Playfair Display', serif"
    },
    {
      title: "Persévérance",
      quote: "La transition vers une nouvelle carrière demande autant de détermination que l'entraînement sportif.",
      author: "Ex-footballeur professionnel",
      color: "rgba(76, 175, 80, 0.8)",
      font: "'Roboto Slab', serif"
    },
    {
      title: "Résilience",
      quote: "La fin d'une carrière sportive n'est pas une fin, mais le début d'un nouveau défi à relever.",
      author: "Ancien champion de tennis",
      color: "rgba(33, 150, 243, 0.8)",
      font: "'Montserrat', sans-serif"
    }
  ];

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? values.length - 1 : prevIndex - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === values.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 3 } }}>
        {/* Nouvelle section avec titre et vidéo */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, gap: 4, mb: 4 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h2" gutterBottom sx={{fontSize:{xs: 10, sm: 70}}}>
              Qui sommes-nous ?
            </Typography>
            <Box sx={{ overflow: 'hidden', maxHeight: '200px', padding: 20 }}>
              <Typography variant="body1" paragraph >
                Nous sommes une organisation dédiée à la reconversion des sportifs de haut niveau. Notre mission est d'accompagner les athlètes dans leur transition vers une nouvelle carrière, en leur fournissant les outils, les ressources et le soutien nécessaires pour réussir.
              </Typography>
              <Typography variant="body1" paragraph>
                Notre équipe est composée de professionnels expérimentés dans les domaines du sport, de la psychologie, de la formation professionnelle et du développement personnel. Nous croyons fermement que les compétences acquises au cours d'une carrière sportive peuvent être transférées avec succès dans le monde professionnel.
              </Typography>
            </Box>
          </Box>
          

          <Box 
            sx={{ 
              flex: '0 0 300px',
              height: '400px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              display: { xs: 'block', md: 'block' }
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                height: '100vh',
                transform: 'translateX(-50%)',
                objectFit: 'cover'
              }}
            >
              <source src="src/assets/videos/206632_small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            />
          </Box>
        </Box>

        <Typography variant="h4" gutterBottom align="center">
          Nos Valeurs
        </Typography>
      </Container>

      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          height: { xs: '400px', sm: '500px' },
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
         <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          height: { xs: '400px', sm: '500px' },
          marginBottom: '40px',
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src="src/assets/videos/206632_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maxWidth: '1200px',
            perspective: '1000px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1, // Ensure cards are above the video
          }}
        >

        </Box>
          
          {[...Array(3)].map((_, i) => {
            const index = (currentCardIndex + i) % values.length;
            return (
              <Card
                key={index}
                sx={{
                  width: { xs: '240px', sm: '280px' },
                  height: { xs: '180px', sm: '200px' },
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transition: 'all 0.5s ease-in-out',
                  transform: `
                    translateX(${(i - 1) * 20 - 120}px) 
                    translateY(${(i - 1) * -30 - 100}px) 
                    translateZ(${(i - 1) * -40}px) 
                    rotateY(${(i - 1) * -5}deg)
                  `,
                  zIndex: 3 - i,
                  backgroundColor: values[index].color,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                  color: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                }}
              >
                <CardContent sx={{ textAlign: 'center', flexGrow: 1, padding: '8px' }}>
                  <Typography variant="h6" component="div" gutterBottom sx={{ fontFamily: values[index].font }}>
                    {values[index].title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                    "{values[index].quote}"
                  </Typography>
                </CardContent>
                <CardContent sx={{ textAlign: 'right', padding: '8px' }}>
                  <Typography variant="caption">
                    - {values[index].author}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
        <IconButton
          onClick={handlePrevCard}
          sx={{ position: 'absolute', left: '5%', color: 'white', zIndex: 4 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNextCard}
          sx={{ position: 'absolute', right: '5%', color: 'white', zIndex: 4 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 3 } }}>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Notre Histoire
          </Typography>
          <Typography variant="body1" paragraph>
            Fondée par des anciens athlètes qui ont personnellement vécu les défis de la reconversion, notre organisation a été créée pour aider d'autres sportifs à naviguer cette période de transition avec succès.
          </Typography>
          <Typography variant="body1" paragraph>
            Depuis notre création, nous avons aidé des centaines d'athlètes à trouver leur voie dans le monde professionnel, en leur offrant des formations, des conseils et un soutien personnalisé. Nous comprenons les défis uniques auxquels sont confrontés les sportifs lors de leur reconversion, et nous sommes déterminés à les aider à réussir cette transition cruciale.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;