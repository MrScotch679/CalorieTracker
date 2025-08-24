'use client';

import Error from 'next/error';

// https://next-intl.dev/docs/environments/error-files#catching-non-localized-requests
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
