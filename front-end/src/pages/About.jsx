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
        font: "'Playfair Display', serif",
        titleSize: "28px",
        quoteSize: "20px"
    },
    {
        title: "Persévérance",
        quote: "La transition vers une nouvelle carrière demande autant de détermination que l'entraînement sportif.",
        author: "Ex-footballeur professionnel",
        color: "rgba(76, 175, 80, 0.8)",
        font: "'Roboto Slab', serif",
        titleSize: "30px",
        quoteSize: "22px"
    },
    {
        title: "Résilience",
        quote: "La fin d'une carrière sportive n'est pas une fin, mais le début d'un nouveau défi à relever.",
        author: "Ancien champion de tennis",
        color: "rgba(33, 150, 243, 0.8)",
        font: "'Montserrat', sans-serif",
        titleSize: "32px",
        quoteSize: "24px"
    },
    {
        title: "Transformation",
        quote: "Chaque compétence acquise dans le sport est un atout pour votre nouvelle vie professionnelle.",
        author: "Ex-nageuse olympique",
        color: "rgba(156, 39, 176, 0.8)",
        font: "'Merriweather', serif",
        titleSize: "29px",
        quoteSize: "21px"
    },
    {
        title: "Courage",
        quote: "Oser se réinventer après une carrière sportive est un acte de bravoure et d'humilité.",
        author: "Ancien boxeur professionnel",
        color: "rgba(244, 67, 54, 0.8)",
        font: "'Lora', serif",
        titleSize: "31px",
        quoteSize: "23px"
    },
    {
        title: "Apprentissage",
        quote: "La reconversion est une opportunité d'apprendre et de grandir au-delà du terrain.",
        author: "Ex-gymnaste de haut niveau",
        color: "rgba(0, 150, 136, 0.8)",
        font: "'Poppins', sans-serif",
        titleSize: "27px",
        quoteSize: "19px"
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
      {/* Fullscreen video section */}
    

      <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 3 } }}>
        {/* Nouvelle section avec titre et vidéo */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, gap: 2, mb: 4}}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h2" gutterBottom sx={{ fontFamily: "'Montserrat', sans-serif", fontSize:{ xs: '1.5rem', sm: '2.5rem', md: '3rem'}}}>
              Qui sommes-nous ?
            </Typography>
            <Box sx={{ overflow: 'hidden', maxHeight: '200px', bgcolor:'grey.100', py: 4, mb: 4 }}>
              <Typography variant="body1" paragraph  sx={{fontSize:{xs: '0.4rem', sm: '0.9rem'}}} >
              ReconnexionPro est un site web dédié à fournir des ressources, des conseils et des témoignages pour guider les sportifs dans cette transition. Le site servira de plateforme où les anciens athlètes pourront trouver des informations sur les différentes opportunités de carrière, des formations adaptées, ainsi que des conseils pour réussir leur reconversion.Trophelix est une plateforme innovante qui répond à un besoin crucial dans le monde du sport : préparer et aider les sportifs semi-professionnels et professionnels à réussir leur transition de carrière. 
              </Typography>
              <Typography variant="body1" paragraph sx={{fontSize:{xs: '0.4rem', sm: '0.9rem'}}}>
              Le site servira de plateforme où les anciens athlètes pourront trouver des informations sur les différentes opportunités de carrière, des formations adaptées, ainsi que des conseils pour réussir leur reconversion. Grâce à notre solution basée sur l'IA, nous offrons des ressources, des experts et des outils pour une transition réussie.
              </Typography>
              <Typography sx={{fontSize:{xs: '0.4rem', sm: '0.9rem'}}}>
              Nous ciblons à la fois les sportifs eux-mêmes, ainsi que les fédérations et clubs sportifs qui peuvent utiliser la plateforme pour accompagner leurs athlètes dans leur reconversion. 
              </Typography>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              flex: '0 0 300px',
              height: { sx:'200px', md:'400px' },
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
                width: '100%',
                height: '100%',
                transform: 'translateX(-50%)',
                objectFit: 'cover'
              }}
            >
              <source src="../assets/videos/464879_African American_Multi-ethnic_1080x1920.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
          height: { xs: '400px', sm: '600px' },
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
            height: { xs: '400px', sm: '600px' },
            marginBottom: '40px',
            overflow: 'hidden',
          }}
        >
            <img
      src="../assets/img/2151101756.jpg" // Remplacez ceci par le chemin de votre image
      alt="Description de l'image"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
      }}
    />

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              maxWidth: '1200px',
              perspective: '1000px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 3,
            }}
          />

          
          
          {[...Array(3)].map((_, i) => {
            const index = (currentCardIndex + i) % values.length;
            return (
              <Card
                key={index}
                sx={{
                  width: { xs: '240px', sm: '500px' },
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

      <Box sx={{ backgroundColor: 'grey.100', padding: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Box 
            my={4} 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'stretch' },
              gap: { xs: 2, md: 4 },
              position: 'relative'
            }}
          >
            <Box 
              sx={{ 
                flex: { xs: '1 1 100%', md: '0 0 30%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: { xs: 'flex-start', md: 'flex-end' },
                paddingRight: { md: 4 },
                position: 'relative'
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  position: { md: 'sticky' },
                  top: '20px',
                  fontWeight: 'bold',
                  color: 'primary.main',
                  textTransform: 'uppercase',
                  borderBottom: '3px solid',
                  borderColor: 'primary.main',
                  paddingBottom: 1,
                  marginBottom: 2
                }}
              >
                Notre Histoire
              </Typography>
            </Box>

            {/* Ligne verticale de séparation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                backgroundColor: 'grey.300',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '30%',
                transform: 'translateX(-50%)'
              }}
            />

            <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 70%' } }}>
              <Typography variant="body1" paragraph>
                Fondée par des anciens athlètes qui ont personnellement vécu les défis de la reconversion, notre organisation a été créée pour aider d'autres sportifs à naviguer cette période de transition avec succès.
              </Typography>
              <Typography variant="body1" paragraph>
                Depuis notre création, nous avons aidé des centaines d'athlètes à trouver leur voie dans le monde professionnel, en leur offrant des formations, des conseils et un soutien personnalisé. Nous comprenons les défis uniques auxquels sont confrontés les sportifs lors de leur reconversion, et nous sommes déterminés à les aider à réussir cette transition cruciale.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
