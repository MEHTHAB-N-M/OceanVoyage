'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

export default function NotFound() {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
      <Typography variant="h1" color="primary" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        The page or cruise route you are looking for does not exist or has been moved.
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/" size="large" style={{ marginTop: '20px' }}>
        Return to Home
      </Button>
    </Container>
  );
}
