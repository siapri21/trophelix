import React, { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Card, Typography, Grid, Box, Badge, Paper } from '@mui/material';
import dayjs from 'dayjs';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [displayedEvent, setDisplayedEvent] = useState(null);

  // Plus d'événements avec des images
  const events = [
    { date: '2024-08-01', title: 'Réunion d\'équipe', details: 'Discussion sur le nouveau projet', location: 'Salle de conférence A', image: 'https://example.com/team-meeting.jpg' },
    { date: '2024-08-05', title: 'Présentation du projet', details: 'Présentation aux investisseurs', location: 'Auditorium principal', image: 'https://example.com/project-presentation.jpg' },
    { date: '2024-08-10', title: 'Deadline du rapport', details: 'Remise du rapport trimestriel', location: 'Bureau du directeur', image: 'https://example.com/report-deadline.jpg' },
    { date: '2024-08-15', title: 'Formation', details: 'Formation sur les nouvelles technologies', location: 'Salle de formation B', image: 'https://example.com/training.jpg' },
    { date: '2024-08-20', title: 'Réunion clients', details: 'Rencontre avec les clients principaux', location: 'Salle de réunion C', image: 'https://example.com/client-meeting.jpg' },
    { date: '2024-08-25', title: 'Lancement produit', details: 'Lancement du nouveau produit', location: 'Hall d\'exposition', image: 'https://example.com/product-launch.jpg' },
    { date: '2024-08-30', title: 'Bilan mensuel', details: 'Revue des performances du mois', location: 'Salle de conférence principale', image: 'https://example.com/monthly-review.jpg' },
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
    const selectedEvent = events.find(event => event.date === newDate.format('YYYY-MM-DD'));
    if (selectedEvent) {
      setDisplayedEvent(selectedEvent);
    }
  };

  // Fonction pour ajouter des points aux dates avec des événements
  const renderDayInPicker = (date, _, pickersDayProps) => {
    const hasEvent = events.some(event => event.date === date.format('YYYY-MM-DD'));

    return (
      <Badge
        key={date.toString()}
        color={hasEvent ? 'primary' : 'default'}
        variant="dot"
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <div {...pickersDayProps} />
      </Badge>
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: { xs: 2, md: 4 } }}>
      <Card sx={{ maxWidth: '1200px', width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mt: 2 }}>
          Calendrier d'événements
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                orientation="landscape"
                value={selectedDate}
                onChange={handleDateChange}
                renderDay={renderDayInPicker}
                dayOfWeekFormatter={() => ''}
                sx={{
                  width: '100%',
                  '& .MuiStaticDatePicker-root': { width: '100%' },
                  '& .MuiPickersCalendarHeader-root': { width: '100%' },
                }}
              />
            </LocalizationProvider>
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

export default EventCalendar;