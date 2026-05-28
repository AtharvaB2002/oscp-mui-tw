import React from 'react';
import { Box, Typography } from '@mui/material';
import { BRAND } from '../theme';

export default function SectionHeading({
  title,
  subtitle,
  variant = 'lg',
  light = false,
  mb = 7,
  titleMb = 2,
  subtitleMaxWidth = 720,
}) {
  const titleSx =
    variant === 'md'
      ? {
          fontWeight: 800,
          letterSpacing: '-0.01em',
          mb: titleMb,
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          color: BRAND.primary,
        }
      : {
          fontWeight: 800,
          letterSpacing: '-0.02em',
          mb: titleMb,
          fontSize: { xs: '2rem', md: '2.6rem' },
        };

  const subtitleSx =
    variant === 'md'
      ? {
          color: 'rgba(10,37,64,0.75)',
          maxWidth: subtitleMaxWidth,
          mx: 'auto',
          fontSize: { xs: '1rem', md: '1.15rem' },
          fontWeight: 500,
        }
      : {
          color: light ? 'rgba(255,255,255,0.78)' : 'rgba(10,37,64,0.7)',
          maxWidth: subtitleMaxWidth,
          mx: 'auto',
        };

  return (
    <Box sx={{ textAlign: 'center', mb }}>
      <Typography variant="h3" component="h2" sx={titleSx}>
        {title}
      </Typography>
      {subtitle && <Typography sx={subtitleSx}>{subtitle}</Typography>}
    </Box>
  );
}
