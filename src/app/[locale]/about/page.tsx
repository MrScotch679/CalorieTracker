import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('common');

  return (
    <div>
      {'About Page'}

      {t('hello')}
    </div>
  );
}
