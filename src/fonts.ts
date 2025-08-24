import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
});
