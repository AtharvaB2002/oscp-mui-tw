import React, { useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useReveal } from '../../common/hooks';
import { BRAND } from '../../common/theme';
import SectionHeading from '../../common/components/SectionHeading.jsx';
import {
  portfolioRockher,
  portfolioVoylite,
  portfolioNewwall,
  portfolioVitalife,
  portfolioVitaliving,
  portfolioMyBongShop,
  portfolioDrivenByStyle,
  portfolioRxlabels,
} from '../../assets/images';

const portfolio = [
  { name: 'RockHer', image: portfolioRockher },
  { name: 'VoyLite', image: portfolioVoylite },
  { name: 'Newwall', image: portfolioNewwall },
  { name: 'VitaLife', image: portfolioVitalife },
  { name: 'Vitaliving', image: portfolioVitaliving },
  { name: 'My-Bong-Shop', image: portfolioMyBongShop },
  { name: 'Driven By Style', image: portfolioDrivenByStyle },
  { name: 'RxLabels', image: portfolioRxlabels },
];

export default function Portfolio() {
  const reveal = useReveal();
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const portfolioCount = portfolio.length;
  const goPortfolio = (next) =>
    setPortfolioIndex(((next % portfolioCount) + portfolioCount) % portfolioCount);

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{ py: { xs: 10, md: 14 }, contentVisibility: 'auto', containIntrinsicSize: '1px 800px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title="Portfolio"
          subtitle="A snapshot of stores we’ve built, migrated, and scaled."
          subtitleMaxWidth={640}
        />
      </Container>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          ref={reveal}
          sx={{
            position: 'relative',
            px: { xs: 0, sm: 7, md: 9 },
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: { xs: 4, md: 6 },
              border: '2px solid rgba(10,37,64,0.08)',
              boxShadow: '0 30px 60px -28px rgba(10,37,64,0.25)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: `${portfolioCount * 100}%`,
                transform: `translateX(-${portfolioIndex * (100 / portfolioCount)}%)`,
                transition: 'transform .55s cubic-bezier(.22,.61,.36,1)',
              }}
            >
              {portfolio.map((p) => (
                <Box
                  key={p.name}
                  sx={{
                    flex: `0 0 ${100 / portfolioCount}%`,
                    bgcolor: '#f5f7fa',
                    aspectRatio: '1440 / 400',
                  }}
                >
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <IconButton
            aria-label="Previous portfolio item"
            onClick={() => goPortfolio(portfolioIndex - 1)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 6, sm: 0 },
              transform: 'translateY(-50%)',
              bgcolor: '#fff',
              color: BRAND.primary,
              width: { xs: 44, md: 56 },
              height: { xs: 44, md: 56 },
              boxShadow: '0 8px 22px -8px rgba(10,37,64,0.35)',
              border: '1px solid rgba(10,37,64,0.08)',
              '& svg': { fontSize: { xs: 26, md: 32 } },
              '&:hover': { bgcolor: BRAND.accent, color: '#fff' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="Next portfolio item"
            onClick={() => goPortfolio(portfolioIndex + 1)}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 6, sm: 0 },
              transform: 'translateY(-50%)',
              bgcolor: '#fff',
              color: BRAND.primary,
              width: { xs: 44, md: 56 },
              height: { xs: 44, md: 56 },
              boxShadow: '0 8px 22px -8px rgba(10,37,64,0.35)',
              border: '1px solid rgba(10,37,64,0.08)',
              '& svg': { fontSize: { xs: 26, md: 32 } },
              '&:hover': { bgcolor: BRAND.accent, color: '#fff' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            {portfolio.map((p, i) => (
              <Box
                key={p.name}
                component="button"
                aria-label={`Go to portfolio item ${i + 1}`}
                aria-current={i === portfolioIndex}
                onClick={() => goPortfolio(i)}
                sx={{
                  p: 0,
                  border: 'none',
                  cursor: 'pointer',
                  width: i === portfolioIndex ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  bgcolor: i === portfolioIndex ? BRAND.accent : 'rgba(10,37,64,0.18)',
                  transition: 'all .3s ease',
                  '&:hover': {
                    bgcolor: i === portfolioIndex ? BRAND.accent : 'rgba(10,37,64,0.35)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
