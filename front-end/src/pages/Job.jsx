import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const JobOffersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOffers = [
    {
      title: "Coach sportif",
      company: "FitnessPro",
      location: "Paris",
      description: "Recherche ancien athlète pour coaching personnalisé",
      skills: ["Motivation", "Planification", "Nutrition"],
    },
    {
      title: "Analyste sportif",
      company: "SportMedia",
      location: "Lyon",
      description: "Analyste pour couverture médiatique d'événements sportifs",
      skills: ["Analyse tactique", "Communication", "Médias"],
    },
    {
      title: "Gestionnaire de projet sportif",
      company: "EventSport",
      location: "Marseille",
      description: "Organisation d'événements sportifs nationaux",
      skills: ["Gestion de projet", "Logistique", "Marketing"],
    },
  ];

  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const filteredJobs = jobOffers.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Offres d'Emploi pour Sportifs en Reconversion
      </Typography>

      <Box my={4}>
        <TextField
          fullWidth
          label="Rechercher une offre"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Grid container spacing={4}>
        {filteredJobs.map((job, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.company} - {job.location}
                </Typography>
                <Typography variant="body2" paragraph>
                  {job.description}
                </Typography>
                <Box mb={2}>
                  {job.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} size="small" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
                <Button variant="contained" onClick={() => handleOpenDialog(job)}>
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedJob?.title}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom><strong>Entreprise:</strong> {selectedJob?.company}</Typography>
          <Typography gutterBottom><strong>Lieu:</strong> {selectedJob?.location}</Typography>
          <Typography gutterBottom><strong>Description:</strong> {selectedJob?.description}</Typography>
          <Typography gutterBottom><strong>Compétences requises:</strong></Typography>
          <Box>
            {selectedJob?.skills.map((skill, idx) => (
              <Chip key={idx} label={skill} size="small" sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Fermer</Button>
          <Button variant="contained" onClick={handleCloseDialog}>Postuler</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default JobOffersPage;