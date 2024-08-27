import React from 'react';
import { 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Button,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

const ForumPage = () => {
  const forumTopics = [
    { title: 'Conseils pour la transition de carrière', author: 'Jean Dupont', replies: 15 },
    { title: 'Partage d\'expériences de reconversion', author: 'Marie Martin', replies: 23 },
    { title: 'Opportunités dans le coaching sportif', author: 'Pierre Durand', replies: 8 },
  ];

  return (
    <Container maxWidth="lg">
      <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">Forum de discussion</Typography>
        <Button variant="outlined" color="primary" component={Link} to="/">
          Retour à l'accueil
        </Button>
      </Box>

      <List>
        {forumTopics.map((topic, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={topic.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      Par {topic.author}
                    </Typography>
                    {` — ${topic.replies} réponses`}
                  </>
                }
              />
            </ListItem>
            {index < forumTopics.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default ForumPage;