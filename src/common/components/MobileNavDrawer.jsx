import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BRAND } from '../theme';

export default function MobileNavDrawer({ navLinks, open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((l) => (
            <ListItem
              key={l.label}
              component="a"
              href={l.href}
              onClick={onClose}
              sx={{ borderRadius: 1 }}
            >
              <ListItemText primary={l.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              href="#contact"
              sx={{ bgcolor: BRAND.accent, '&:hover': { bgcolor: BRAND.accentDark } }}
              onClick={onClose}
            >
              Contact Us
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
