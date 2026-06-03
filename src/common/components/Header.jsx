import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import { BRAND } from '../theme';
import { navLinks } from '../constants';
import { oscWhiteLogo } from '../../assets/images';
import { ShopifyMegaMenu } from './ShopifyNav.jsx';
import MobileNavDrawer from './MobileNavDrawer.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let last = null;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const v = window.scrollY > 50;
        if (v !== last) {
          last = v;
          setScrolled(v);
        }
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: '#1e293b',
          backdropFilter: 'blur(12px)',
          color: BRAND.primary,
          borderBottom: '1px solid rgba(10,37,64,0.08)',
          transition: 'all .25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
              <Box
                component={RouterLink}
                to="/"
                reloadDocument
                aria-label="Go to homepage"
                sx={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <Box
                  component="img"
                  src={oscWhiteLogo.src}
                  srcSet={oscWhiteLogo.srcSet}
                  alt="OSC Professionals"
                  sx={{ height: { xs: 36, md: 44 }, width: 'auto', display: 'block' }}
                />
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navLinks.map((l) =>
                l.dropdown ? (
                  <ShopifyMegaMenu key={l.label} />
                ) : (
                  <Button
                    key={l.label}
                    href={l.href}
                    sx={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textTransform: 'none',
                      px: 1.5,
                      '&:hover': { color: BRAND.accent, bgcolor: 'transparent' },
                    }}
                  >
                    {l.label}
                  </Button>
                )
              )}
              <Button
                variant="contained"
                href="/#contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  ml: 1.5,
                  bgcolor: BRAND.accent,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2.5,
                  '&:hover': { bgcolor: BRAND.accentDark },
                }}
              >
                Contact Us
              </Button>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, color: '#ffffff' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileNavDrawer
        navLinks={navLinks}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
