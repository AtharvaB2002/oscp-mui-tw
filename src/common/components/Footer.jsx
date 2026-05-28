import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { BRAND } from '../theme';

export default function Footer() {
  return (
    <Box component="footer" id="about" sx={{ bgcolor: BRAND.primary, color: '#fff', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 1.2,
                  background: `linear-gradient(135deg, #fff, ${BRAND.accent})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: BRAND.primary,
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                O
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                oscprofessionals
              </Typography>
            </Box>
            <Typography sx={{ opacity: 0.75, mb: 3, lineHeight: 1.7 }}>
              Full-service eCommerce agency building Shopify, Magento, and Odoo solutions since 2000.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[LinkedInIcon, FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  aria-label="Social link"
                  sx={{
                    color: '#fff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    '&:hover': { bgcolor: BRAND.accent },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontWeight: 800, mb: 2, color: BRAND.accent }}>India HQ</Typography>
            <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
              <LocationOnIcon sx={{ fontSize: 20, opacity: 0.8 }} />
              <Typography sx={{ opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                34 Mantri House, Shivaji Nagar,
                <br />
                Nagpur, Maharashtra 440010
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
              <PhoneIcon sx={{ fontSize: 20, opacity: 0.8 }} />
              <Typography sx={{ opacity: 0.85, fontSize: 14 }}>+91 0712-6648744</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.2 }}>
              <EmailIcon sx={{ fontSize: 20, opacity: 0.8 }} />
              <MuiLink
                href="mailto:support@oscprofessionals.com"
                sx={{ color: '#fff', opacity: 0.85, fontSize: 14, textDecoration: 'none' }}
              >
                support@oscprofessionals.com
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontWeight: 800, mb: 2, color: BRAND.accent }}>UK Office</Typography>
            <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
              <LocationOnIcon sx={{ fontSize: 20, opacity: 0.8 }} />
              <Typography sx={{ opacity: 0.85, fontSize: 14, lineHeight: 1.6 }}>
                Unit 4 / Triangle Centre, 399 Uxbridge Road,
                <br />
                Southall, Middlesex UB1 3EJ
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.2 }}>
              <PhoneIcon sx={{ fontSize: 20, opacity: 0.8 }} />
              <Typography sx={{ opacity: 0.85, fontSize: 14 }}>+44 07585311009</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.12)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography sx={{ opacity: 0.65, fontSize: 13 }}>
            Copyright © 2026 · oscprofessionals · All Rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {['Technologies', 'Career', 'Privacy Policy', 'Terms & Conditions'].map((l) => (
              <MuiLink
                key={l}
                href="#"
                sx={{
                  color: '#fff',
                  opacity: 0.75,
                  fontSize: 13,
                  textDecoration: 'none',
                  '&:hover': { color: BRAND.accent, opacity: 1 },
                }}
              >
                {l}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
