import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

// Données des cartes
const cardData = [
  {
    title: "Bilan de compétence",
    quote: "Le succès est la somme de petits efforts répétés jour après jour.",
    author: "Robert Collier",
    color: "#4A90E2", // Bleu
  },
  {
    title: "Atelier confiance en soi et estime de soi",
    quote: "La confiance en soi est le premier secret du succès.",
    author: "Ralph Waldo Emerson",
    color: "#50C878", // Vert Émeraude
  },
  {
    title: "Atelier CV",
    quote: "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu'un d'autre.",
    author: "Steve Jobs",
    color: "#FF6B6B", // Rouge Pastel
  },
  {
    title: "Atelier de recherche d'emploi ou de formation",
    quote: "Le meilleur moyen de prédire l'avenir est de l'inventer.",
    author: "Alan Kay",
    color: "#FFD700", // Or
  },
  {
    title: "Suivi personnalisé par un expert en réinsertion sportive",
    quote: "Le sport ne construit pas le caractère, il le révèle.",
    author: "Heywood Hale Broun",
    color: "#9B59B6", // Violet
  },
];


// Composant principal
export default function RessourceCard(){
  // Composant de carte individuelle
  const RessourcedCard = ({ title, quote, author, index, color }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    // Effet pour l'animation d'apparition
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
          transitionDelay: `${index * 0.2}s`,
          height: '100%',
        }}
      >
        <Card 
          sx={{ 
            height: '100%',
            backgroundColor: isHovered ? color : '#FFFFFF',
            transition: 'background-color 0.3s ease',
            boxShadow: 3,
          }}
        >
          <CardContent
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h5" 
              component="div"
              sx={{ 
                color: isHovered ? 'white' : color,
                transition: 'color 0.3s ease',
                marginBottom: 2,
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{
                fontStyle: 'italic',
                color: isHovered ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                transition: 'color 0.3s ease',
                marginBottom: 1,
              }}
            >
              "{quote}"
            </Typography>
            <Typography 
              variant="body2" 
              sx={{
                color: isHovered ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                transition: 'color 0.3s ease',
              }}
            >
              - {author}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  // Rendu du conteneur de cartes
  return (
    <Grid container spacing={3} sx={{ padding: 4 }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <RessourcedCard 
            title={card.title} 
            quote={card.quote} 
            author={card.author} 
            index={index} 
            color={card.color}
          />
        </Grid>
      ))}
    </Grid>
  );
}







