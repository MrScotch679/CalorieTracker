import type { ReactNode } from 'react';

import styles from './SContainer.module.scss';

interface Props {
  children: ReactNode;
}

export const SContainer = (props: Props) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};
