// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', padding: 2, textAlign: 'center', marginTop: 'auto' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Ygud Forum. Tüm hakları saklıdır.
      </Typography>
      <Typography variant="body2">
        <Link href="/about" underline="hover">
          Hakkında
        </Link>{' '}
        |{' '}
        <Link href="/contact" underline="hover">
          İletişim
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
