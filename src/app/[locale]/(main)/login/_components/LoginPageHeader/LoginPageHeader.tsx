import { getTranslations } from 'next-intl/server';

import { Namespace } from '@/i18n/namespaces';
import { SText } from '@/shared';

import styles from './LoginPageHeader.module.scss';

export const LoginPageHeader = async () => {
  const t = await getTranslations(Namespace.LOGIN);

  return (
    <div className={styles.root}>
      <SText variant="h1" align="center" color="secondary" weight="bold">
        {t('title')}
      </SText>

      <SText variant="h3" color="secondary" align="center">
        {t('subtitle')}
      </SText>
    </div>
  );
};
