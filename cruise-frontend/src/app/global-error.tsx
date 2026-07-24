'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ textAlign: 'center', paddingTop: '100px', fontFamily: 'sans-serif' }}>
          <h1>System Error</h1>
          <p>A critical application error occurred.</p>
          <button onClick={() => reset()} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
