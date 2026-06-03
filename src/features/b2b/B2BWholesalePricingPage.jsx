import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Stack, Paper, IconButton } from '@mui/material';
import {
  Star,
  Download,
  PlayCircle,
  Tag,
  FileSpreadsheet,
  ShoppingCart,
  ClipboardList,
  Receipt,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Mail,
  History,
  Puzzle,
  Headphones,
  Sparkles,
  Quote,
} from 'lucide-react';
import { BRAND } from '../../common/theme';
import { CIRCUIT_PATTERN } from '../../common/constants';
import Portfolio from '../landing/Portfolio.jsx';
import {
  featTierPricing,
  featImportExport,
  featCartDiscount,
  featQuickOrderForm,
  featTaxDisplay,
} from '../../assets/images';

const GOLD = '#d4a017';
const FEATURE_BG = '#eef3f8';
const DARK_GRAD =
  'radial-gradient(circle at 20% 30%, #0d2a4a 0%, #061528 60%, #030b18 100%)';

// Auto-load every image dropped into src/assets/img/slider/, sorted by filename
// (use 01.png, 02.png … 17.png to control order). New files appear with no code change.
const sliderModules = import.meta.glob(
  '../../assets/img/slider/*.{png,jpg,jpeg,webp,gif,avif}',
  { eager: true }
);
const sliderImages = Object.keys(sliderModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((k) => sliderModules[k].default);

// ── App screenshot slider ───────────────────────────────────────────────────
function AppScreenshotSlider() {
  const [index, setIndex] = useState(0);
  const count = sliderImages.length;
  if (count === 0) return null;
  const go = (next) => setIndex(((next % count) + count) % count);

  return (
    <Box sx={{ position: 'relative', px: { xs: 0, sm: 7, md: 9 } }}>
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: { xs: 3, md: 5 },
          border: '1px solid rgba(10,37,64,0.1)',
          boxShadow: '0 30px 60px -28px rgba(10,37,64,0.3)',
          bgcolor: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: `${count * 100}%`,
            transform: `translateX(-${index * (100 / count)}%)`,
            transition: 'transform .55s cubic-bezier(.22,.61,.36,1)',
          }}
        >
          {sliderImages.map((src, i) => (
            <Box
              key={i}
              sx={{ flex: `0 0 ${100 / count}%`, display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src={src}
                alt={`OSCP B2B Wholesale Pricing screenshot ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                sx={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {count > 1 && (
        <>
          <IconButton
            aria-label="Previous screenshot"
            onClick={() => go(index - 1)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 6, sm: 0 },
              transform: 'translateY(-50%)',
              bgcolor: '#fff',
              color: BRAND.primary,
              width: { xs: 44, md: 54 },
              height: { xs: 44, md: 54 },
              boxShadow: '0 8px 22px -8px rgba(10,37,64,0.35)',
              border: '1px solid rgba(10,37,64,0.08)',
              '&:hover': { bgcolor: BRAND.accent, color: '#fff' },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Next screenshot"
            onClick={() => go(index + 1)}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 6, sm: 0 },
              transform: 'translateY(-50%)',
              bgcolor: '#fff',
              color: BRAND.primary,
              width: { xs: 44, md: 54 },
              height: { xs: 44, md: 54 },
              boxShadow: '0 8px 22px -8px rgba(10,37,64,0.35)',
              border: '1px solid rgba(10,37,64,0.08)',
              '&:hover': { bgcolor: BRAND.accent, color: '#fff' },
            }}
          >
            <ChevronRight />
          </IconButton>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 4 }}>
            {sliderImages.map((_, i) => (
              <Box
                key={i}
                component="button"
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                sx={{
                  p: 0,
                  border: 'none',
                  cursor: 'pointer',
                  width: i === index ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  bgcolor: i === index ? BRAND.accent : 'rgba(10,37,64,0.18)',
                  transition: 'all .3s ease',
                  '&:hover': { bgcolor: i === index ? BRAND.accent : 'rgba(10,37,64,0.35)' },
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

// ── Section heading helper ──────────────────────────────────────────────────
function Heading({ title, subtitle, light = false, maxWidth = 680 }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          letterSpacing: '-0.02em',
          fontSize: { xs: '1.8rem', md: '2.4rem' },
          color: light ? '#fff' : BRAND.primary,
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            color: light ? 'rgba(255,255,255,0.75)' : 'rgba(10,37,64,0.7)',
            maxWidth,
            mx: 'auto',
            fontSize: { xs: '0.98rem', md: '1.08rem' },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

// ── Feature screenshot panel with a gold accent blob ────────────────────────
function FeatureVisual({ image, label }) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        p: { xs: 2, md: 3 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${GOLD} 0%, #f0c33c 70%, transparent 72%)`,
          opacity: 0.85,
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={image.src}
        srcSet={image.srcSet}
        alt={label}
        loading="lazy"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: 2,
          border: '1px solid rgba(10,37,64,0.1)',
          boxShadow: '0 24px 50px -28px rgba(10,37,64,0.35)',
          bgcolor: '#fff',
        }}
      />
    </Box>
  );
}

const features = [
  {
    icon: Tag,
    image: featTierPricing,
    title: 'Tier Pricing & B2B Wholesale Pricing',
    desc: 'Easily manage B2B and wholesale pricing based on customer tags with customized rates.',
    points: [
      'Offer tailored B2B pricing for specific customers and market segments.',
      'Support pricing across multiple currencies and regions.',
      'Set tiered pricing for individual products and variants.',
      'Configure wholesale pricing with bundled quantities and collections for maximum flexibility.',
    ],
  },
  {
    icon: FileSpreadsheet,
    image: featImportExport,
    title: 'Import & Export',
    desc: 'Easily bulk-manage your pricing rules using the import and export feature of the OSCP B2B Wholesale Pricing App.',
    points: [
      'Import and export variant-based pricing rules.',
      'Import and export product- and collection-based pricing rules.',
    ],
  },
  {
    icon: ShoppingCart,
    image: featCartDiscount,
    title: 'Cart Discount',
    desc: 'Boost average order value by offering smart cart-based discounts through the OSCP B2B Wholesale Pricing App.',
    points: [
      'Set percentage or fixed-price discounts on the cart total.',
      'Apply tiered discounts based on cart value or quantity.',
      'Customize discount rules to fit your B2B or retail strategy.',
    ],
  },
  {
    icon: ClipboardList,
    image: featQuickOrderForm,
    title: 'Quick Order Form',
    desc: 'Simplify bulk purchasing and speed up the buying process with the OSCP B2B Wholesale Pricing App.',
    points: [
      'Enable quick bulk orders through an intuitive form.',
      'Seamlessly integrates with tiered discount rules.',
      'Boost average order value with faster, larger checkouts.',
    ],
  },
  {
    icon: Receipt,
    image: featTaxDisplay,
    title: 'Tax Display',
    desc: 'Show tax details clearly alongside your pricing on product pages with the OSCP B2B Wholesale Pricing App.',
    points: [
      'Display taxes within the listing on the PDP.',
      "Customize the widget to match your website's design and layout.",
    ],
  },
];

const helpCards = [
  { icon: BookOpen, title: 'User Guide', desc: 'Step-by-step instructions to get started.' },
  { icon: HelpCircle, title: 'FAQs', desc: 'Quick answers to common questions.' },
  { icon: ShieldCheck, title: 'Privacy Policy', desc: 'Learn how we protect your data.' },
  { icon: Mail, title: 'Get in Touch', desc: 'Request features or share feedback.' },
  { icon: History, title: 'Change Log', desc: 'Stay up to date with the latest updates.' },
  { icon: Puzzle, title: 'Theme Integration Support', desc: 'Guidance for seamless setup with your theme.' },
];

const differentiators = [
  {
    icon: Tag,
    title: 'Wholesale pricing',
    desc: 'Create wholesale pricing based on collections, products, and their variants using customer tags.',
  },
  {
    icon: Headphones,
    title: '24 / 7 Support',
    desc: 'Need any help? We are available to help you via chat or email.',
  },
  {
    icon: Sparkles,
    title: 'App that meets your needs',
    desc: 'Our team specializes in customizing apps to align with your requirements, ensuring seamless functionality and an optimal user experience.',
  },
];

// ── Tier-pricing mock for the hero ──────────────────────────────────────────
function HeroTierCard() {
  const rows = [
    ['1 – 9', '$24.99'],
    ['10 – 49', '$21.99'],
    ['50 – 99', '$18.99'],
    ['100 +', '$15.99'],
  ];
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 30px 60px -28px rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,255,255,0.15)',
        maxWidth: 380,
        mx: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2.5, py: 1.5, bgcolor: '#f3f6f9' }}>
        <Tag size={18} color={GOLD} />
        <Typography sx={{ fontWeight: 800, fontSize: 14, color: BRAND.primary }}>Tier Pricing</Typography>
      </Box>
      <Box sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              bgcolor: '#eef2f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShoppingCart size={24} color="rgba(10,37,64,0.4)" />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 14, color: BRAND.primary }}>
              Pure White Basic Tee
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'rgba(10,37,64,0.55)' }}>Wholesale tier pricing</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 1.5,
            py: 0.75,
            bgcolor: '#f7f9fb',
            borderRadius: 1,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'rgba(10,37,64,0.55)' }}>QUANTITY</Typography>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'rgba(10,37,64,0.55)' }}>PRICE</Typography>
        </Box>
        {rows.map(([q, p]) => (
          <Box
            key={q}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              px: 1.5,
              py: 1,
              borderBottom: '1px solid rgba(10,37,64,0.06)',
            }}
          >
            <Typography sx={{ fontSize: 13, color: BRAND.primary, fontWeight: 600 }}>{q}</Typography>
            <Typography sx={{ fontSize: 13, color: BRAND.accentDark, fontWeight: 800 }}>{p}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default function B2BWholesalePricingPage() {
  return (
    <Box component="main">
      {/* ── Hero ── */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 13, md: 18 },
          pb: { xs: 9, md: 13 },
          background: DARK_GRAD,
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
            opacity: 0.35,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 1.5,
                  py: 0.6,
                  mb: 2.5,
                  borderRadius: 999,
                  bgcolor: 'rgba(0,164,189,0.18)',
                  color: BRAND.accent,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.04em',
                }}
              >
                Shopify · B2B Wholesale
              </Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', md: '3.1rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                OSCP B2B Wholesale Pricing App
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', mb: 2.5, maxWidth: 520, lineHeight: 1.6 }}>
                Wholesale pricing based on customer tags &amp; create B2B customers.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3.5 }}>
                <Box sx={{ display: 'flex', gap: 0.25 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={18} fill={GOLD} color={GOLD} />
                  ))}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>4.8</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>(14 reviews)</Typography>
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  href="https://apps.shopify.com/custom-pricing-wholesale"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Download size={18} />}
                  sx={{
                    bgcolor: BRAND.accent,
                    color: '#fff',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.3,
                    borderRadius: 2,
                    '&:hover': { bgcolor: BRAND.accentDark },
                  }}
                >
                  Install App
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  href="https://demo-custom-pricing-wholesale.myshopify.com/password"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<PlayCircle size={18} />}
                  sx={{
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.45)',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.3,
                    borderRadius: 2,
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  App Demo
                </Button>
              </Stack>
              <Typography sx={{ mt: 2.5, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                Store password: <Box component="span" sx={{ color: BRAND.accent, fontWeight: 700 }}>oscp123</Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeroTierCard />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Explore What's Inside ── */}
      <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
        <Container maxWidth="md">
          <Heading title="Explore What's Inside" />
          <Typography
            sx={{
              textAlign: 'center',
              color: 'rgba(10,37,64,0.7)',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            B2B Wholesale Pricing, Tier Pricing, Tier Pricing on Products &amp; Collections, Registration
            Form, Tax Display, Bulk Import/Export, Cart Discount, Clubbed Qty for Discounts, Auto Order
            Tag, Compatible with Shopify Discounts, Extra Fee, Free Gift, Multicurrency, Market Support,
            Multiple Ready Templates, Order Limit, Add-On Tier Pricing &amp; Currency-Based Tier Pricing
            for Variants — all with the OSCP B2B Wholesale Pricing App.
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: FEATURE_BG,
              border: '1px solid rgba(10,37,64,0.08)',
            }}
          >
            <Typography sx={{ fontWeight: 800, color: BRAND.primary, mb: 1.5 }}>
              What this app offers
            </Typography>
            <Typography sx={{ color: 'rgba(10,37,64,0.72)', lineHeight: 1.8, fontSize: 14 }}>
              Offer B2B wholesale pricing features like custom pricing, quantity breaks, B2B registration
              forms, and a Quick Order Form. Set tiered pricing for specific products, collections, or
              individual variants based on customer tags and Shopify Markets integration. The solution
              includes a registration form for creating wholesale accounts, while the Quick Order Form lets
              buyers add multiple items to their cart using SKUs. Easily display tax prices based on
              country, along with Bulk Import/Export, Cart Discount, Auto Order Tag, Multicurrency, Market
              Support, Multiple Ready Templates, Order Limit, and Currency-Based Tier Pricing for Variants.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* ── App screenshot slider ── */}
      {sliderImages.length > 0 && (
        <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
          <Container maxWidth="lg">
            <Heading
              title="OSCP B2B Wholesale Pricing App"
              subtitle="Wholesale pricing based on customer tag & create b2b customers"
            />
            <AppScreenshotSlider />
          </Container>
        </Box>
      )}

      {/* ── Features ── */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: FEATURE_BG }}>
        <Container maxWidth="lg">
          <Heading title="Features" />
          <Stack spacing={{ xs: 7, md: 10 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              const flip = i % 2 === 1;
              return (
                <Grid
                  container
                  spacing={{ xs: 4, md: 7 }}
                  alignItems="center"
                  key={f.title}
                  direction={{ xs: 'column-reverse', md: flip ? 'row-reverse' : 'row' }}
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: 'rgba(0,164,189,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon size={24} color={BRAND.accent} />
                    </Box>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{ fontWeight: 800, color: BRAND.primary, fontSize: { xs: '1.4rem', md: '1.7rem' }, mb: 1.5 }}
                    >
                      {f.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(10,37,64,0.72)', lineHeight: 1.7, mb: 2.5 }}>
                      {f.desc}
                    </Typography>
                    <Stack spacing={1.25}>
                      {f.points.map((p) => (
                        <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: '50%',
                              bgcolor: BRAND.accent,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              mt: 0.2,
                            }}
                          >
                            <Check size={14} color="#fff" />
                          </Box>
                          <Typography sx={{ color: 'rgba(10,37,64,0.82)', fontSize: 15 }}>{p}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                    <FeatureVisual image={f.image} label={f.title} />
                  </Grid>
                </Grid>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* ── See How Our App Works in Action ── */}
      <Box component="section" id="overview" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Heading
            title="See How Our App Works in Action"
            subtitle="Get a quick walkthrough of key features, intuitive design, and how effortlessly you can achieve your goals using our app."
          />
          <Button
            size="large"
            variant="contained"
            href="#overview"
            startIcon={<PlayCircle size={18} />}
            sx={{
              bgcolor: BRAND.accent,
              color: '#fff',
              fontWeight: 700,
              textTransform: 'none',
              px: 4,
              py: 1.4,
              borderRadius: 2,
              '&:hover': { bgcolor: BRAND.accentDark },
            }}
          >
            Explore the App Overview
          </Button>
        </Container>
      </Box>

      {/* ── Tell us your requirement ── */}
      <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              background: DARK_GRAD,
              color: '#fff',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' }, mb: 1 }}>
                Tell us your requirement
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 560 }}>
                We usually begin with a demo to understand the use case and suggest the best possible
                approach.
              </Typography>
            </Box>
            <Button
              size="large"
              variant="contained"
              href="#contact"
              endIcon={<ArrowRight size={18} />}
              sx={{
                flexShrink: 0,
                bgcolor: BRAND.accent,
                color: '#fff',
                fontWeight: 700,
                textTransform: 'none',
                px: 3.5,
                py: 1.3,
                borderRadius: 2,
                '&:hover': { bgcolor: BRAND.accentDark },
              }}
            >
              Contact Us
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* ── Portfolio (shared carousel, reused from the landing page) ── */}
      <Portfolio />

      {/* ── Need more help? ── */}
      <Box component="section" sx={{ py: { xs: 9, md: 13 }, background: DARK_GRAD, color: '#fff' }}>
        <Container maxWidth="lg">
          <Heading
            light
            title="Need more help?"
            subtitle="Find quick answers, detailed documentation, and support resources to guide you at every step."
          />
          <Grid container spacing={3}>
            {helpCards.map((c) => {
              const Icon = c.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={c.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all .25s ease',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.09)', transform: 'translateY(-4px)' },
                    }}
                  >
                    <Icon size={26} color={BRAND.accent} />
                    <Typography sx={{ fontWeight: 700, color: '#fff', mt: 1.5, mb: 0.75 }}>
                      {c.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6 }}>
                      {c.desc}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ── Features that make this app different ── */}
      <Box component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Heading
            title="Features that make this app different"
            subtitle="Discover the unique tools that set us apart."
          />
          <Grid container spacing={3} justifyContent="center">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <Grid item xs={12} md={4} key={d.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: 3,
                      textAlign: 'center',
                      border: '1px solid rgba(10,37,64,0.1)',
                      transition: 'all .25s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px -24px rgba(10,37,64,0.25)',
                        borderColor: BRAND.accent,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        mb: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0,164,189,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={26} color={BRAND.accent} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: BRAND.primary, mb: 1 }}>{d.title}</Typography>
                    <Typography sx={{ color: 'rgba(10,37,64,0.7)', fontSize: 14, lineHeight: 1.6 }}>
                      {d.desc}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ── Trusted by Clients Worldwide ── */}
      <Box component="section" id="install" sx={{ py: { xs: 9, md: 13 }, bgcolor: FEATURE_BG }}>
        <Container maxWidth="md">
          <Heading
            title="Trusted by Clients Worldwide"
            subtitle="Helping Shopify businesses scale with custom development, lightning-fast support, and reliable solutions. Hear it directly from our clients."
          />
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              p: { xs: 4, md: 5 },
              borderRadius: 3,
              textAlign: 'center',
              maxWidth: 640,
              mx: 'auto',
              border: '1px solid rgba(10,37,64,0.1)',
              boxShadow: '0 24px 50px -30px rgba(10,37,64,0.25)',
            }}
          >
            <Quote size={34} color={BRAND.accent} style={{ opacity: 0.45 }} />
            <Typography sx={{ color: 'rgba(10,37,64,0.85)', fontSize: '1.05rem', lineHeight: 1.7, my: 2 }}>
              This app is amazing — the functions are exactly what I need, and they have very quick
              responses every time I need help. Highly recommended!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.25, mb: 1 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill={GOLD} color={GOLD} />
              ))}
            </Box>
            <Typography sx={{ fontWeight: 700, color: BRAND.primary }}>Hpieprints</Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
