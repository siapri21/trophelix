import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

const cardData = [
  {
    title: "Bilan de compétence",
    description: "Contenu de la carte 1 qui change de couleur au survol.",
  },
  {
    title: "Atelier confiance en soi et estime de soi",
    description: "Contenu de la carte 1 qui change de couleur au survol.",
  },
  {
    title: "Atelier CV",
    description: "Contenu de la carte 1 qui change de couleur au survol.",
  },
  {
    title: "Atelier de rechercher d'emploi ou de formation",
    description: "Contenu de la carte 1 qui change de couleur au survol.",
  },
  {
    title: "Suivi personnalisé par un expert en reconsertion sportive",
    description: "Contenu de la carte 1 qui change de couleur au survol.",
  },
];

const RessourcedCard = ({ title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Déclenche l'animation lorsque la carte devient visible
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        transform: isVisible ? 'translateY(20px)' : 'translateY(50px)',
        opacity: isVisible ? 10 : 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        transitionDelay: isVisible ? `${index * 0.5}s` : '5s',
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 345,
          backgroundColor: isHovered ? '#e0e0e0' : 'white',
          transition: 'background-color 0.3s ease',
        }}
      >
        <CardContent
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography 
            variant="h5" 
            component="div"
            sx={{ 
              color: isHovered ? '#1976d2' : 'black',
              transition: 'color 0.9s ease',
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const CardContainer = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <RessourcedCard title={card.title} description={card.description} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;