import { getTranslations } from 'next-intl/server';

import { Namespace } from '@/i18n/namespaces';
import { SH1, SH3 } from '@/shared';

import styles from './LoginPageHeader.module.scss';

export const LoginPageHeader = async () => {
  const t = await getTranslations(Namespace.LOGIN);

  return (
    <div className={styles.root}>
      <SH1 align="center" color="secondary">
        {t('title')}
      </SH1>

      <SH3 color="secondary" align="center">
        {t('subtitle')}
      </SH3>
    </div>
  );
};
