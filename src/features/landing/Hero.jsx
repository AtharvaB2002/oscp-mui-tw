import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useParallaxRef } from '../../common/hooks';
import { BRAND } from '../../common/theme';

export default function Hero() {
  const heroOrb1Ref = useParallaxRef(0.35);
  const heroOrb2Ref = useParallaxRef(-0.18);
  const heroOrb3Ref = useParallaxRef(0.22);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        backgroundImage: `url('src/assets/img/homepage-banner.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        ref={heroOrb1Ref}
        aria-hidden
        sx={{
          position: 'absolute',
          top: -120,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,164,189,0.35), transparent 65%)',
          filter: 'blur(10px)',
          willChange: 'transform',
          pointerEvents: 'none',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        ref={heroOrb2Ref}
        aria-hidden
        sx={{
          position: 'absolute',
          top: 180,
          left: -120,
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,37,64,0.18), transparent 65%)',
          filter: 'blur(12px)',
          willChange: 'transform',
          pointerEvents: 'none',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        ref={heroOrb3Ref}
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -140,
          right: '30%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,164,189,0.22), transparent 65%)',
          filter: 'blur(10px)',
          willChange: 'transform',
          pointerEvents: 'none',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.4rem', md: '3.6rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                mb: 2.5,
              }}
            >
              <Box component="span" sx={{ color: '#ffffff' }}>
                Full Service eCommerce Agency
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#ffffff',
                fontWeight: 400,
                mb: 4,
                maxWidth: 560,
              }}
            >
              We create, build, and maintain world-class eCommerce solutions on Shopify,
              Magento, and beyond — trusted by 500+ brands since 2000.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                size="large"
                variant="contained"
                href="#contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: BRAND.accent,
                  fontWeight: 700,
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.4,
                  borderRadius: 2,
                  '&:hover': { bgcolor: BRAND.accentDark },
                }}
              >
                Get Started
              </Button>
              <Button
                size="large"
                variant="outlined"
                href="#portfolio"
                sx={{
                  color: '#ffffff',
                  bgcolor: BRAND.accent,
                  borderColor: 'rgba(10,37,64,0.25)',
                  fontWeight: 700,
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.4,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: BRAND.primary,
                    bgcolor: BRAND.accentDark,
                  },
                }}
              >
                View Portfolio
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, mt: 5, flexWrap: 'wrap' }}>
              {['Shopify Partner', 'Magento Certified', 'Odoo Solutions'].map((t) => (
                <Box key={t} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: BRAND.accent, fontSize: 20 }} />
                  <Typography sx={{ fontWeight: 600, color: '#ffffff' }}>
                    {t}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
