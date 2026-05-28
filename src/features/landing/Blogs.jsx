import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { useReveal } from '../../common/hooks';
import { BRAND } from '../../common/theme';
import SectionHeading from '../../common/components/SectionHeading.jsx';

const blogs = [
  {
    title: 'How to Optimize Shopify App Performance at Scale',
    tag: 'Performance',
    excerpt:
      'Practical patterns for keeping Shopify apps fast as your install base grows past 10k merchants.',
  },
  {
    title: 'The Complete Shopify Dropshipping Guide for 2026',
    tag: 'Strategy',
    excerpt:
      'From supplier vetting to automated fulfillment — everything we’ve learned shipping dropshipping stores.',
  },
  {
    title: 'Scaling Shopify App Development with a Distributed Team',
    tag: 'Engineering',
    excerpt:
      'How we structure pods, code reviews, and release trains to ship Shopify apps without bottlenecks.',
  },
];

export default function Blogs() {
  const reveal = useReveal();

  return (
    <Box
      component="section"
      id="blogs"
      sx={{ py: { xs: 10, md: 14 }, contentVisibility: 'auto', containIntrinsicSize: '1px 700px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title="From the blog"
          subtitle="Field notes from building Shopify and Magento at scale."
          subtitleMaxWidth={640}
        />
        <Grid container spacing={3}>
          {blogs.map((b, i) => (
            <Grid item xs={12} md={4} key={b.title} ref={reveal}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(10,37,64,0.08)',
                  transition: 'all .25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px -20px rgba(10,37,64,0.25)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 160,
                    background: `linear-gradient(135deg, hsl(${(i * 80 + 180) % 360}, 55%, 88%) 0%, hsl(${
                      (i * 80 + 220) % 360
                    }, 55%, 80%) 100%)`,
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={b.tag}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(0,164,189,0.12)',
                      color: BRAND.accentDark,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
                    {b.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(10,37,64,0.7)', fontSize: 14, lineHeight: 1.6 }}>
                    {b.excerpt}
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
