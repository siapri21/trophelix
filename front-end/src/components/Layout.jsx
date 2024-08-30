// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ResponsiveAppBar />
      <Box component="main" sx={{ flexGrow: 1, pt: 8, pb: 6 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;