import { getTranslations } from 'next-intl/server';

import { Namespace } from '@/i18n/namespaces';
import { Link } from '@/i18n/navigation';
import { SH2, SText } from '@/shared';

import { LoginForm } from './components/LoginForm/LoginForm';

import styles from './LoginPageContent.module.scss';

export const LoginPageContent = async () => {
  const t = await getTranslations(Namespace.LOGIN);

  return (
    <div className={styles.root}>
      <SH2 align="center" color="secondary">
        {t('form.title')}
      </SH2>

      <LoginForm />

      <SText align="center" color="secondary">
        {t.rich('form.dontHaveAccount', {
          a: chunk => (
            <Link style={{ color: 'var(--accent)' }} href="/signup">
              {chunk}
            </Link>
          ),
        })}
      </SText>
    </div>
  );
};
