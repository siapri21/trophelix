"use client"

import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, Typography, Grid, Box, Paper } from '@mui/material';
import dayjs from 'dayjs';

const Event = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayedEvent, setDisplayedEvent] = useState(null);

  // Plus d'événements avec des images
  const events = [
    { date: '2024-08-01', title: 'Réunion d\'équipe', details: 'Discussion sur le nouveau projet', location: 'Salle de conférence A', image: 'src/assets/img/reunion_equipe.jpg' },
    { date: '2024-08-05', title: 'Présentation du projet', details: 'Présentation aux investisseurs', location: 'Auditorium principal', image: 'src/assets/img/12291315_Two colleagues analyzing work together.jpg' },
    { date: '2024-08-10', title: 'Deadline du rapport', details: 'Remise du rapport trimestriel', location: 'Bureau du directeur', image: 'src/assets/img/rapport.jpg' },
    { date: '2024-08-15', title: 'Formation', details: 'Formation sur les nouvelles technologies', location: 'Salle de formation B', image: 'src/assets/img/formation.jpg' },
    { date: '2024-08-20', title: 'Réunion clients', details: 'Rencontre avec les clients principaux', location: 'Salle de réunion C', image: 'src/assets/img/reunion_clients.jpg' },
    { date: '2024-08-25', title: 'Lancement produit', details: 'Lancement du nouveau produit', location: 'Hall d\'exposition', image: 'src/assets/img/lancement.jpg' },
    { date: '2024-08-30', title: 'Bilan mensuel', details: 'Revue des performances du mois', location: 'Salle de conférence principale', image: 'https://i.pinimg.com/564x/6f/25/29/6f2529fcef64a6d0bfbb7682f55fb131.jpg' },
  ];

  useEffect(() => {
    // Trouver l'événement le plus proche
    const now = dayjs();
    const sortedEvents = [...events].sort((a, b) => 
      Math.abs(dayjs(a.date).diff(now)) - Math.abs(dayjs(b.date).diff(now))
    );
    setDisplayedEvent(sortedEvents[0]);
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const selectedEvent = events.find(event => event.date === dayjs(newDate).format('YYYY-MM-DD'));
    if (selectedEvent) {
      setDisplayedEvent(selectedEvent);
    } else {
      setDisplayedEvent(null);
    }
  };

  // Fonction pour déterminer si une date a un événement
  const hasEvent = (date) => {
    return events.some(event => event.date === dayjs(date).format('YYYY-MM-DD'));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: { xs: 2, md: 4 } }}>
      <Card sx={{ maxWidth: '1200px', width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mt: 2 }}>
          Calendrier d'événements
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              className="rounded-md border"
              modifiers={{
                hasEvent: (date) => hasEvent(date),
              }}
              modifiersStyles={{
                hasEvent: { textDecoration: "underline", color: "blue" }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              {displayedEvent ? (
                <>
                  <Typography variant="h6" gutterBottom>{displayedEvent.title}</Typography>
                  <Typography variant="body1">Date : {displayedEvent.date}</Typography>
                  <Typography variant="body1">Détails : {displayedEvent.details}</Typography>
                  <Typography variant="body1">Lieu : {displayedEvent.location}</Typography>
                  <img src={displayedEvent.image} alt={displayedEvent.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginTop: '16px' }} />
                </>
              ) : (
                <Typography variant="body1">Aucun événement sélectionné</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Event;