import { SignUpPageContent } from './_components/SignUpPageContent/SignUpPageContent';
import { SignUpPageHeader } from './_components/SignUpPageHeader/SignUpPageHeader';

import styles from './_components/SignUpPage.module.scss';

export default async function SignUpPage() {
  return (
    <article className={styles.root}>
      <SignUpPageHeader />
      <SignUpPageContent />
    </article>
  );
}
