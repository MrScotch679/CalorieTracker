import 'server-only';

import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { namespaces } from './namespaces';
import { routing } from './routing';

export default getRequestConfig(async params => {
  const { requestLocale } = params;

  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Load all namespace messages and merge them
  const messages = {};

  await Promise.all(
    namespaces.map(async ns => {
      const nsMessages = (await import(`../../../../messages/${locale}/${ns}.json`)).default;
      Object.assign(messages, nsMessages);
    })
  );

  return {
    locale,
    messages,
  };
});
