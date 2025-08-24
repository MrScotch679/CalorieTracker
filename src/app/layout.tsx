import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
export default function RootLayout(props: Props) {
  const { children } = props;

  return children;
}
