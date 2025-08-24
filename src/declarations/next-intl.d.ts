import type { useTranslations } from 'next-intl';
import type { getTranslations } from 'next-intl/server';

import type { formats, routing, useRouter } from '@/shared';

// https://next-intl.dev/docs/workflows/typescript
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Formats: typeof formats;
  }

  // Translation function server type
  export type TranslationFunctionServer =
    ReturnType<typeof getTranslations> extends Promise<infer TranslateFn> ? TranslateFn : never;

  // Translation function client type
  export type TranslationFunctionClient = ReturnType<typeof useTranslations<never>>;

  export type NextIntlRouter = ReturnType<typeof useRouter>;
}
