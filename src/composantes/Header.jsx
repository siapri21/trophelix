import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/img/trophelix_logo-removebg-preview.png';

const pages = ['Communaute', 'Contact', 'Faq', 'Offredemploi', 'Qui sommes-nous'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={(theme) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: '999px',
      backgroundImage: 'linear-gradient(to left,  #8A2BE2, #ffffff)',
      maxHeight: 60,
      padding: 1,
      border: '1px solid ',
      borderColor: 'divider',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    })}>
      <Container maxWidth="lg" sx={{ 
        display: 'flex',
        justifyContent: 'space-between', // Espace entre les éléments
        alignItems: 'center',
        width: '100%',
        padding: { xs: '0 16px', md: 0 }, // Padding pour petits écrans
      }}>
        <Toolbar
          variant="regular"
          sx={{
            width: '100%',
            justifyContent: { xs: 'space-between', md: 'center' }, // Espace entre sur xs, centré sur md
          }}
        >
          <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Trophelix Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* Votre titre ici si nécessaire */}
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleLoginClick}>Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;