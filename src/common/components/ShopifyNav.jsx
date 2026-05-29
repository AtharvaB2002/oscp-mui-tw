import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Popper,
  Grow,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Named imports (not `import *`) so Vite tree-shakes lucide to just these icons.
import {
  Store,
  Paintbrush,
  Code2,
  ArrowLeftRight,
  Gauge,
  Wrench,
  Tag,
  Tags,
  Layers,
  Truck,
  EyeOff,
  Palette,
  BarChart3,
  Circle,
} from 'lucide-react';
import { BRAND } from '../theme';
import { shopifyServices, shopifyApps } from '../constants';

export { shopifyServices, shopifyApps };

const ICONS = {
  Store,
  Paintbrush,
  Code2,
  ArrowLeftRight,
  Gauge,
  Wrench,
  Tag,
  Tags,
  Layers,
  Truck,
  EyeOff,
  Palette,
  BarChart3,
};

// Renders the lucide icon named on a menu item (falls back to a dot if missing).
function ItemIcon({ name, size = 18 }) {
  const Icon = ICONS[name] || Circle;
  return <Icon size={size} color={BRAND.accent} />;
}

// Renders a single menu entry as either an internal router link (`to`) or a
// plain anchor (`href`).
function linkProps(item) {
  return item.to
    ? { component: RouterLink, to: item.to }
    : { component: 'a', href: item.href || '#' };
}

function MenuColumn({ heading, items, onNavigate }) {
  return (
    <Box sx={{ minWidth: 240 }}>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: BRAND.accent,
          mb: 1,
        }}
      >
        {heading}
      </Typography>
      <List dense disablePadding>
        {items.map((item) => (
          <ListItemButton
            key={item.label}
            {...linkProps(item)}
            onClick={onNavigate}
            sx={{
              borderRadius: 1,
              px: 1,
              py: 0.75,
              color: BRAND.primary,
              '&:hover': { bgcolor: 'rgba(0,164,189,0.08)', color: BRAND.accentDark },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <ItemIcon name={item.icon} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

/**
 * Desktop hover/focus mega-menu for the "Shopify" nav item. Opens a two-column
 * dropdown (Services / Apps). Styled to sit in the dark slate AppBar.
 */
export function ShopifyMegaMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const closeTimer = useRef(null);

  // The Popper renders in a portal, so moving the mouse from the trigger into
  // the panel briefly leaves both elements. A short close delay (cancelled when
  // either the trigger or the panel is re-entered) bridges that gap.
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const show = () => {
    cancelClose();
    setOpen(true);
  };
  const scheduleHide = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };
  const hide = () => {
    cancelClose();
    setOpen(false);
  };

  useEffect(() => cancelClose, []);

  return (
    <Box
      ref={anchorRef}
      onMouseEnter={show}
      onMouseLeave={scheduleHide}
      onFocus={show}
      sx={{ display: 'inline-flex' }}
    >
      <Button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{ transition: 'transform .2s ease', transform: open ? 'rotate(180deg)' : 'none' }}
          />
        }
        sx={{
          color: '#ffffff',
          fontWeight: 600,
          textTransform: 'none',
          px: 1.5,
          '&:hover': { color: BRAND.accent, bgcolor: 'transparent' },
        }}
      >
        Shopify
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        keepMounted
        style={{ zIndex: 1300 }}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={200} style={{ transformOrigin: 'top left' }}>
            <Paper
              elevation={8}
              onMouseEnter={show}
              onMouseLeave={scheduleHide}
              sx={{
                p: 3,
                borderRadius: 2,
                display: 'flex',
                gap: 5,
                border: '1px solid rgba(10,37,64,0.08)',
              }}
            >
              <MenuColumn heading="Services" items={shopifyServices} onNavigate={hide} />
              <MenuColumn heading="Apps" items={shopifyApps} onNavigate={hide} />
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

/**
 * Mobile drawer version: "Shopify" as an expandable/collapsible section holding
 * the same Services and Apps lists. `onNavigate` closes the drawer on selection.
 */
export function ShopifyMobileSection({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const renderItems = (items) =>
    items.map((item) => (
      <ListItemButton
        key={item.label}
        {...linkProps(item)}
        onClick={onNavigate}
        sx={{ pl: 3, borderRadius: 1 }}
      >
        <ListItemIcon sx={{ minWidth: 30 }}>
          <ItemIcon name={item.icon} size={16} />
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
        />
      </ListItemButton>
    ));

  return (
    <>
      <ListItemButton onClick={() => setOpen((v) => !v)} sx={{ borderRadius: 1 }}>
        <ListItemText primary="Shopify" primaryTypographyProps={{ fontWeight: 600 }} />
        <KeyboardArrowDownIcon
          sx={{ transition: 'transform .2s ease', transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography
          sx={{ pl: 2, pt: 1, fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', color: BRAND.accent }}
        >
          SERVICES
        </Typography>
        <List dense disablePadding>
          {renderItems(shopifyServices)}
        </List>
        <Typography
          sx={{ pl: 2, pt: 1, fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', color: BRAND.accent }}
        >
          APPS
        </Typography>
        <List dense disablePadding>
          {renderItems(shopifyApps)}
        </List>
      </Collapse>
    </>
  );
}
