import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Box,
} from '@mui/material';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Tentative de connexion avec:', formData.email, formData.password);
      // Ajoutez ici la logique de connexion
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }
      console.log('Tentative d\'inscription avec:', formData.email, formData.password);
      // Ajoutez ici la logique d'inscription
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ marginTop: 8, padding: 4 }}>
        <Typography component="h1" variant="h5" align="center">
          {isLogin ? 'Connexion' : 'Inscription'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            {!isLogin && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmer le mot de passe"
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleMode}>
                {isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;