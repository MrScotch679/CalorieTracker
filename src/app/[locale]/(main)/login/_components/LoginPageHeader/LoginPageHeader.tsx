import { getTranslations } from 'next-intl/server';

import { Namespace } from '@/i18n/namespaces';
import { SHeading } from '@/shared';

import styles from './LoginPageHeader.module.scss';

export const LoginPageHeader = async () => {
  const t = await getTranslations(Namespace.LOGIN);

  return (
    <div className={styles.root}>
      <SHeading headingLevel={1} align="center" color="secondary">
        {t('title')}
      </SHeading>

      <SHeading headingLevel={3} color="secondary" align="center">
        {t('subtitle')}
      </SHeading>
    </div>
  );
};
