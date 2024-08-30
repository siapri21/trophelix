import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/material/styles';

// Composants stylisés
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: `linear-gradient(45deg, #008CBA 30%, #FF9800 90%)`,
  borderRadius: '15px',
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '15px',
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
}));

const VideoCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
}));

const FAQReconversionSportive = () => {
  const faqs = [
    {
      question: "Qu'est-ce que la reconversion sportive ?",
      answer: "La reconversion sportive est le processus par lequel un athlète de haut niveau prépare et effectue sa transition vers une nouvelle carrière après sa carrière sportive.",
    },
    {
      question: "Pourquoi la reconversion sportive est-elle importante ?",
      answer: "Elle est cruciale car la carrière d'un athlète est généralement courte. La reconversion permet d'assurer un avenir professionnel stable après la fin de la carrière sportive.",
    },
    {
      question: "Quand dois-je commencer à penser à ma reconversion ?",
      answer: "Il est recommandé de commencer à y penser dès le début de votre carrière sportive. Plus tôt vous commencez à planifier, plus vous aurez d'options et de temps pour vous préparer.",
    },
    {
      question: "Quelles sont les étapes clés de la reconversion sportive ?",
      answer: "Les étapes clés incluent : l'auto-évaluation, l'exploration des options de carrière, la formation ou l'éducation supplémentaire, le développement de nouvelles compétences, le réseautage, et la transition progressive vers la nouvelle carrière.",
    },
  ];

  const tutorials = [
    {
      title: "Comment réussir sa reconversion sportive",
      videoUrl: "https://www.youtube.com/embed/N8QPnQ8Dzjw",
    },
    {
      title: "Les étapes de la reconversion professionnelle",
      videoUrl: "https://www.youtube.com/embed/U26nMJHoj0E",
    },
    {
      title: "Gérer la transition émotionnelle après le sport",
      videoUrl: "https://www.youtube.com/embed/bBYEviupPN4",
    },
    {
      title: "Comment faire un bilan de compétences pour un sportif de haut niveau",
      videoUrl: "https://www.youtube.com/embed/6G8WAXvq6Xk",
    },
    {
      title: "Les étapes clés pour réussir sa reconversion après une carrière sportive",
      videoUrl: "https://www.youtube.com/embed/Vao8TLBkBbg",
    },
    {
      title: "Développer sa marque personnelle après une carrière sportive",
      videoUrl: "https://www.youtube.com/embed/ki2cZOYfgWw",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#FE6B8B' }}>
          FAQ Reconversion Sportive
        </Typography>

        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{faq.question}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography>{faq.answer}</Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Box>

        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#FF8E53', mb: 4 }}>
          Tutoriels Vidéo
        </Typography>
        <Grid container spacing={4}>
          {tutorials.map((tutorial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <VideoCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://img.youtube.com/vi/${tutorial.videoUrl.split('/').pop()}/0.jpg`}
                  alt={tutorial.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {tutorial.title}
                  </Typography>
                </CardContent>
                <Button 
                  startIcon={<PlayArrowIcon />}
                  variant="contained"
                  sx={{ 
                    m: 2,
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white',
                  }}
                  href={tutorial.videoUrl}
                  target="_blank"
                >
                  Regarder
                </Button>
              </VideoCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FAQReconversionSportive;