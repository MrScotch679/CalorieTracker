import { LoginPageContent } from './_components/LoginPageContent/LoginPageContent';
import { LoginPageHeader } from './_components/LoginPageHeader/LoginPageHeader';

import styles from './_components/LoginPage.module.scss';

export default async function LoginPage() {
  return (
    <article className={styles.root}>
      <LoginPageHeader />

      <LoginPageContent />
    </article>
  );
}
