import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { BRAND } from '../../common/theme';
import SectionHeading from '../../common/components/SectionHeading.jsx';

const stats = [
  { value: '500+', label: 'Happy Customers', icon: 'src/assets/img/strength-happy-customers.webp' },
  { value: 'Since 2000', label: 'Established in', icon: 'src/assets/img/strength-established.webp' },
  { value: '50+', label: 'Skilled Developers', icon: 'src/assets/img/strength-developers.webp' },
  { value: '300+', label: 'Projects Delivered', icon: 'src/assets/img/strength-projects.webp' },
];

export default function OurStrength() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#f1f3f5',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          variant="md"
          mb={6}
          title="Our strength"
          subtitle="Empowering eCommerce with Experience, Expertise, and Results"
        />
        <Grid container spacing={2}>
          {stats.map((s) => (
            <Grid item xs={6} md={3} key={s.label}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 5,
                  border: '2px solid #d9dde2',
                  bgcolor: '#fff',
                  transition: 'all .25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px -16px rgba(10,37,64,0.2)',
                    borderColor: '#c5cad1',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2, md: 2.5 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 2 },
                    '&:last-child': { pb: { xs: 2, md: 2.5 } },
                  }}
                >
                  <Box
                    component="img"
                    src={s.icon}
                    alt=""
                    aria-hidden
                    sx={{
                      width: { xs: 75, md: 75 },
                      height: { xs: 75, md: 75 },
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: BRAND.primary,
                        fontSize: { xs: '1.15rem', md: '1.4rem' },
                        lineHeight: 1.1,
                        mb: 0.5,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(10,37,64,0.7)',
                        fontWeight: 500,
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        lineHeight: 1.3,
                      }}
                    >
                      {s.label}
                    </Typography>
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
