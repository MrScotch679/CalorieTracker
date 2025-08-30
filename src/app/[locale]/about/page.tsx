import { getTranslations } from 'next-intl/server';

import { AboutPageContent } from './_components/AboutPageContent/AboutPageContent';

export default async function AboutPage() {
  const t = await getTranslations('common');

  return (
    <div>
      {'About Page'}

      {t('hello')}

      <AboutPageContent />
    </div>
  );
}
