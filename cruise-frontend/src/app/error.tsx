'use client';

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
      <Typography variant="h1" color="error" fontWeight="bold" gutterBottom>
        500
      </Typography>
      <Typography variant="h4" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        An unexpected error occurred. Please try again.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => reset()} size="large" style={{ marginTop: '20px' }}>
        Try Again
      </Button>
    </Container>
  );
}
