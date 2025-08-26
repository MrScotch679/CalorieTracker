import { defineRouting } from 'next-intl/routing';

// https://next-intl.dev/docs/routing
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ru'],
  localeDetection: true,
  localePrefix: 'as-needed',
  localeCookie: true,

  // Used when no locale matches
  defaultLocale: 'en',
});
