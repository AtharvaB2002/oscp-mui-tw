import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { useParallaxRef } from '../../common/hooks';
import { BRAND } from '../../common/theme';
import { CIRCUIT_PATTERN } from '../../common/constants';

export default function CTABanner() {
  const ctaOrbRef = useParallaxRef(0.18, 3000);

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
        background:
          'radial-gradient(circle at 20% 50%, #0d2a4a 0%, #061528 60%, #030b18 100%)',
        color: '#fff',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: CIRCUIT_PATTERN,
          backgroundSize: '240px 240px',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />
      <Box
        ref={ctaOrbRef}
        aria-hidden
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '50%', md: '22%' },
          transform: 'translate(-50%, -50%)',
          width: { xs: 360, md: 520 },
          height: { xs: 360, md: 520 },
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,164,189,0.35) 0%, rgba(0,164,189,0.05) 50%, transparent 70%)',
          filter: 'blur(28px)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 280, sm: 340, md: 420 },
                height: { xs: 280, sm: 340, md: 420 },
                mx: { xs: 'auto', md: 0 },
                ml: { md: 'auto' },
                mr: { md: 6 },
              }}
            >
              {[
                { size: '100%', opacity: 0.18, dashed: true, rot: 0 },
                { size: '86%', opacity: 0.35, dashed: false, rot: 25 },
                { size: '72%', opacity: 0.55, dashed: false, rot: 60 },
                { size: '58%', opacity: 0.85, dashed: false, rot: 110 },
              ].map((r, i) => (
                <Box
                  key={i}
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: r.size,
                    height: r.size,
                    transform: `translate(-50%, -50%) rotate(${r.rot}deg)`,
                    borderRadius: '50%',
                    border: `${i === 3 ? 2 : 1}px ${r.dashed ? 'dashed' : 'solid'} rgba(0,164,189,${r.opacity})`,
                    boxShadow:
                      i === 3
                        ? '0 0 30px rgba(0,164,189,0.5), inset 0 0 20px rgba(0,164,189,0.25)'
                        : i === 2
                        ? '0 0 18px rgba(0,164,189,0.25)'
                        : 'none',
                  }}
                />
              ))}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '58%',
                  height: '58%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(0,164,189,0.18) 0%, rgba(10,37,64,0.6) 60%, rgba(6,21,40,0.85) 100%)',
                }}
              />
              <Box
                component="img"
                src="src/assets/img/OSC-White-logo.png"
                alt="OSC"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '34%',
                  height: 'auto',
                  filter: 'drop-shadow(0 0 18px rgba(0,164,189,0.55))',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, pr: { md: 4 } }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  mb: 4,
                  fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' },
                  lineHeight: 1.15,
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Button
                size="large"
                variant="outlined"
                href="mailto:support@oscprofessionals.com"
                sx={{
                  color: '#fff',
                  borderColor: BRAND.accent,
                  borderWidth: 2,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  letterSpacing: '0.01em',
                  '&:hover': {
                    borderColor: BRAND.accent,
                    borderWidth: 2,
                    bgcolor: 'rgba(0,164,189,0.12)',
                    boxShadow: '0 0 24px rgba(0,164,189,0.35)',
                  },
                }}
              >
                Book A Strategy Call Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
