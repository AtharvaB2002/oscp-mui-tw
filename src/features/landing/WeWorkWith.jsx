import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { useReveal } from '../../common/hooks';
import SectionHeading from '../../common/components/SectionHeading.jsx';

const segments = [
  {
    image: 'src/assets/img/we-work-with-retail.webp',
    title: 'Retail Entrepreneur',
    desc: "We help B2C fashion, jewelry, beauty, home decor, electronics, and lifestyle brands thrive in the digital era with innovative eCommerce solutions. From seamless store management to enhanced customer experiences, our services are designed to boost your online presence, streamline operations, and maximize sales. Let's transform your business with the power of digitization!",
  },
  {
    image: 'src/assets/img/we-work-with-agencies.webp',
    title: 'Agencies',
    desc: 'Empowering companies, independent software vendors and consulting firms. As their online affiliate, we assist agencies and allow them to successfully manage the programs of their company. We are increasing their existing team or taking full responsibility for their projects.',
  },
  {
    image: 'src/assets/img/we-work-with-b2b.webp',
    title: 'B2B Wholesale',
    desc: 'Transform your store into a B2B wholesale! As Shopify B2B experts, we help wholesalers streamline bulk orders, automate pricing, manage inventory, and enhance customer relationships. Unlock volume discounts, flexible payments, restricted access, and personalized pricing.',
  },
];

export default function WeWorkWith() {
  const reveal = useReveal();

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <SectionHeading
          variant="md"
          mb={6}
          title="We Work With"
          subtitle="Empowering diverse partners from retail entrepreneurs to agencies and B2B wholesalers to grow, scale, and succeed"
        />
        <Grid container spacing={3}>
          {segments.map((s) => (
            <Grid item xs={12} md={4} key={s.title} ref={reveal}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  bgcolor: '#fff',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all .25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px -20px rgba(10,37,64,0.2)',
                    borderColor: '#cfcfcf',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    backgroundImage: `url('${s.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  role="img"
                  aria-label={s.title}
                >
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0,0,0,0.45)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        color: '#d4a017',
                        fontWeight: 800,
                        textAlign: 'center',
                        fontSize: { xs: '1.15rem', md: '1.25rem' },
                        letterSpacing: '0.01em',
                        textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                      }}
                    >
                      {s.title}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography
                    sx={{
                      color: 'rgba(10,37,64,0.85)',
                      fontSize: 14,
                      lineHeight: 1.7,
                      textAlign: 'justify',
                    }}
                  >
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
