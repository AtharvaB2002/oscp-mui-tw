import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useReveal } from '../../common/hooks';
import { BRAND } from '../../common/theme';
import { B2B_PATH } from '../../common/constants';
import SectionHeading from '../../common/components/SectionHeading.jsx';
import {
  wholesaleB2bLogo,
  pricingDiscountSuiteLogo,
  bundleUpsellLogo,
  shippingDiscountLogo,
  hideShippingPaymentLogo,
  swatchesLogo,
  addOnsTierPricingLogo,
} from '../../assets/images';

// `to` → internal router link (the B2B page); apps without it fall back to "#".
const apps = [
  {
    logo: wholesaleB2bLogo,
    title: 'OSCP Wholesale B2B',
    desc: 'Tiered pricing and customer tag-based wholesale workflows built natively into Shopify.',
    to: B2B_PATH,
  },
  {
    logo: pricingDiscountSuiteLogo,
    title: 'OSCP Pricing & Discount Suite',
    desc: 'Run tiered discounts and customer-group promotions without writing a line of code.',
  },
  {
    logo: bundleUpsellLogo,
    title: 'OSCP Bundle & Upsell',
    desc: 'Increase order value with smart product combinations and bundle pricing rules.',
  },
  {
    logo: shippingDiscountLogo,
    title: 'OSCP Shipping Discount',
    desc: 'Automate shipping savings by order value, location, or customer segment.',
  },
  {
    logo: hideShippingPaymentLogo,
    title: 'OSCP Hide Shipping & Payment',
    desc: 'Rule-based visibility for checkout methods — show what fits, hide what doesn’t.',
  },
  {
    logo: swatchesLogo,
    title: 'OSCP Swatches',
    desc: 'Visual product options with color and image swatches for clearer choices.',
  },
  {
    logo: addOnsTierPricingLogo,
    title: 'OSCP Add-Ons Tier Pricing',
    desc: 'Volume-based discounts on add-on products that drive repeat purchases.',
  },
];

export default function MarketplaceApps() {
  const reveal = useReveal();

  return (
    <Box component="section" id="solutions" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="OSCP Shopify Marketplace Apps"
          subtitle="Enhance Your Shopify Store with Powerful OSCP-Verified Apps"
        />

        <Grid container spacing={3} justifyContent="center">
          {apps.map((a) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={a.title} ref={reveal}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid rgba(10,37,64,0.08)',
                  transition: 'all .25s ease',
                  bgcolor: '#1E293B',
                  color: '#fff',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px -20px rgba(10,37,64,0.25)',
                    borderColor: BRAND.accent,
                  },
                }}
              >
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={a.logo.src}
                    srcSet={a.logo.srcSet}
                    alt={a.title}
                    sx={{ height: 64, width: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {a.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>
                    {a.desc}
                  </Typography>
                  <Button
                    {...(a.to ? { component: RouterLink, to: a.to } : { href: '#' })}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 'auto',
                      pt: 2,
                      color: BRAND.accent,
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'rgba(0,164,189,0.08)' },
                    }}
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
