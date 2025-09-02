import type { Metadata, Viewport } from 'next';
import { type Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { type ReactNode } from 'react';

import { roboto } from '@/fonts';
import { routing } from '@/i18n/routing';
import { MobxProvider } from '@/providers/MobxProvider';
import '@/styles/main.scss';

export const metadata: Metadata = {
  title: 'Calorie Tracker',
  description:
    'Calorie Tracker is a calorie tracker app that helps you track your calories and macros.',
};

export const viewport: Viewport = {
  // --background-primary
  // themeColor: '#110b12',
};

interface Props {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout(props: Props) {
  const { children, params } = props;

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    console.error(`Locale ${locale} is not supported`);

    notFound();
  }

  return (
    <html lang={locale}>
      <body className={roboto.variable}>
        <NextIntlClientProvider>
          <MobxProvider>
            <main>{children}</main>
          </MobxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
