import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { BRAND } from '../common/theme';
import Header from '../common/components/Header.jsx';
import Footer from '../common/components/Footer.jsx';

export default function Layout() {
  return (
    <Box sx={{ bgcolor: '#fff', color: BRAND.primary, fontFamily: 'inherit' }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
