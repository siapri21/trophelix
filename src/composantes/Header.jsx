import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import theme from '@material-tailwind/react/theme';
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
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../assets/img/trophelix_logo-removebg-preview.png'


const pages = ['Accueil', 'Communaute','Contact','Faq', 'Offredemploi','Qui sommes-nous' ];

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
    <AppBar position="fixed"  sx={(theme) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: '999px',
      // backgroundImage: 'linear-gradient(to left, #8A2BE2, rgba(0, 191, 255, 0.7))',
      // backgroundImage: 'linear-gradient(to left, #6A0dad, rgba(135, 206, 250, 0.7))',
      backgroundImage: 'linear-gradient(to left,  #8A2BE2, #ffffff)',
      maxHeight: 60,
      padding: 2,
      border: '1px solid ',
      borderColor: 'divider',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
     
    })}>
      <Container maxWidth={false} sx={{ borderRadius: '999px', margin: '10px' }}>
        <Toolbar
          variant="regular">
          {/* Logo et titre pour les écrans moyens et grands */}
        <Link to={'/Accueil'}>
        <img src={Logo} alt="Trophelix Logo" style={{ height: '40px', marginRight: '10px' }} />
     
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        
          </Typography>
      
        </Link>

          {/* Menu hamburger pour les petits écrans */}
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
                    to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo et titre pour les petits écrans */}
         <Link to={'/Accueil'}>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography>
         </Link>

          {/* Liens de navigation pour les écrans moyens et grands */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

          {/* Bouton de connexion */}
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleLoginClick}>Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;