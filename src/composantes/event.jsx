import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Card, Typography, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, Badge } from '@mui/material';
import dayjs from 'dayjs';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Plus d'événements
  const events = [
    { date: '2024-08-01', title: 'Réunion d\'équipe', details: 'Discussion sur le nouveau projet', location: 'Salle de conférence A' },
    { date: '2024-08-05', title: 'Présentation du projet', details: 'Présentation aux investisseurs', location: 'Auditorium principal' },
    { date: '2024-08-10', title: 'Deadline du rapport', details: 'Remise du rapport trimestriel', location: 'Bureau du directeur' },
    { date: '2024-08-15', title: 'Formation', details: 'Formation sur les nouvelles technologies', location: 'Salle de formation B' },
    { date: '2024-08-20', title: 'Réunion clients', details: 'Rencontre avec les clients principaux', location: 'Salle de réunion C' },
    { date: '2024-08-25', title: 'Lancement produit', details: 'Lancement du nouveau produit', location: 'Hall d\'exposition' },
    { date: '2024-08-30', title: 'Bilan mensuel', details: 'Revue des performances du mois', location: 'Salle de conférence principale' },
  ];

  const eventsForSelectedDate = events.filter(
    (event) => event.date === selectedDate.format('YYYY-MM-DD')
  );

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
      >
        <div {...pickersDayProps} />
      </Badge>
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: 12 }}>
      <Card sx={{ maxWidth: '1200px', width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mt: 2 }}>
          Calendrier d'événements
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'flex-start', p: 2 }}>
          <Box sx={{ width: '100%', maxWidth: '600px', mb: { xs: 4, md: 0 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                orientation="landscape"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderDay={renderDayInPicker}
                sx={{
                  width: '100%',
                  '& .MuiStaticDatePicker-root': { width: '100%' },
                  '& .MuiPickersCalendarHeader-root': { width: '100%' },
                }}
              />
            </LocalizationProvider>
          </Box>

          <Box sx={{ width: '100%', maxWidth: '400px', ml: { md: 8 } }}>
            <Typography variant="h6" gutterBottom>
              Événements pour le {selectedDate.format('DD/MM/YYYY')}:
            </Typography>
            <List>
              {eventsForSelectedDate.length > 0 ? (
                eventsForSelectedDate.map((event, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={event.title} />
                    <Button variant="outlined" onClick={() => handleOpenDialog(event)}>
                      En savoir plus
                    </Button>
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="Aucun événement pour cette date" />
                </ListItem>
              )}
            </List>
          </Box>
        </Box>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedEvent?.title}</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>Date: {selectedEvent?.date}</Typography>
            <Typography gutterBottom>Détails: {selectedEvent?.details}</Typography>
            <Typography gutterBottom>Localisation: {selectedEvent?.location}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Fermer</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
};

export default EventCalendar;