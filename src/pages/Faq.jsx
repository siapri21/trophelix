import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Remplacez par l'ID de votre vidéo
    },
    {
      title: "Les étapes de la reconversion professionnelle",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Remplacez par l'ID de votre vidéo
    },
    {
      title: "Gérer la transition émotionnelle après le sport",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3", // Remplacez par l'ID de votre vidéo
    },
    {
    title: "Comment faire un bilan de compétences pour un sportif de haut niveau",
    videoUrl: "https://www.youtube.com/embed/REAL_VIDEO_ID_1",
  },
  {
    title: "Les étapes clés pour réussir sa reconversion après une carrière sportive",
    videoUrl: "https://www.youtube.com/embed/REAL_VIDEO_ID_2",
  },
  {
    title: "Développer sa marque personnelle après une carrière sportive",
    videoUrl: "https://www.youtube.com/embed/REAL_VIDEO_ID_11",
  },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          FAQ Reconversion Sportive
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Tutoriels Vidéo
          </Typography>
          <Grid container spacing={2}>
            {tutorials.map((tutorial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {tutorial.title}
                  </Typography>
                  <iframe
                    width="100%"
                    height="200"
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQReconversionSportive;