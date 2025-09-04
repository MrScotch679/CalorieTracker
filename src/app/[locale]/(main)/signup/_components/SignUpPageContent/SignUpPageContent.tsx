import { getTranslations } from 'next-intl/server';

import { Namespace } from '@/i18n/namespaces';
import { Link } from '@/i18n/navigation';
import { SText } from '@/shared';

import { SignUpForm } from './components/SignUpForm/SignUpForm';

import styles from './SignUpPageContent.module.scss';

export const SignUpPageContent = async () => {
  const t = await getTranslations(Namespace.SIGNUP);

  return (
    <div className={styles.root}>
      <SText variant="h2" align="center" weight="bold" color="secondary">
        {t('form.title')}
      </SText>

      <SignUpForm />

      <SText align="center" color="secondary">
        {t.rich('form.haveAccount', {
          a: chunk => (
            <Link style={{ color: 'var(--accent)' }} href="/login">
              {chunk}
            </Link>
          ),
        })}
      </SText>
    </div>
  );
};
