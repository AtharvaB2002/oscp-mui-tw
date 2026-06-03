import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, Grid } from '@mui/material';
import { useReveal } from '../../common/hooks';
import { BRAND } from '../../common/theme';
import { CIRCUIT_PATTERN } from '../../common/constants';
import SectionHeading from '../../common/components/SectionHeading.jsx';

// Fallback background: the original photo (Testimonials-Background) is no longer
// in the project. To restore it, drop the source image into src/assets/img/, run
// `npm run optimize:images`, then use bgWith() from ../../utilities with the
// generated sm/md/lg variants as the backgroundImage.
const TESTIMONIALS_BG = 'linear-gradient(160deg, #0A2540 0%, #061528 100%)';

const testimonials = [
  {
    name: 'Simon Friberg',
    company: 'Efuma ApS',
    rating: 5,
    quote:
      'Reliable, professional, and consistent. The OSCP team delivered exactly what we needed — on time and with clean code.',
    avatar: 'SF',
  },
  {
    name: 'Craig Flango',
    company: 'Driven By Style LLC',
    rating: 5,
    quote:
      '15+ years of partnership says it all. They’ve been with us through every Magento version, every redesign, and every scaling challenge.',
    avatar: 'CF',
  },
  {
    name: 'Sagar Rathi',
    company: 'Voylite Designs',
    rating: 5,
    quote:
      'Our migration was seamless. Communication was clear at every step, and the result speaks for itself — faster, cleaner, and easier to manage.',
    avatar: 'SR',
  },
];

export default function Testimonials() {
  const reveal = useReveal();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        backgroundImage: TESTIMONIALS_BG,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        contentVisibility: 'auto',
        containIntrinsicSize: '1px 600px',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: CIRCUIT_PATTERN,
          backgroundSize: '240px 240px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          light
          titleMb={1.5}
          subtitleMaxWidth={600}
          title="What clients say"
          subtitle="500+ brands across 20+ countries. Here’s what a few of them have to say."
        />
        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={4} key={t.name} ref={reveal}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  p: 1,
                  bgcolor: '#fff',
                  border: '1px solid rgba(10,37,64,0.08)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Rating value={t.rating} readOnly size="small" sx={{ mb: 2 }} />
                  <Typography sx={{ color: 'rgba(10,37,64,0.85)', mb: 3, lineHeight: 1.7 }}>
                    “{t.quote}”
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: BRAND.accent, fontWeight: 700 }}>{t.avatar}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                      <Typography sx={{ fontSize: 13, color: 'rgba(10,37,64,0.6)' }}>
                        {t.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
