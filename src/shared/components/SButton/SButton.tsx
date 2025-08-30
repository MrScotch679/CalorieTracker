'use client';

import clsx from 'clsx';

import type { SButtonProps } from '../../types/SButton/SButtonProps';

import styles from './SButton.module.scss';

export const SButton = (props: SButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth,
    className,
    children,
    disabled,
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={clsx(
        styles.root,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        {
          [styles['is-loading']]: loading,
          [styles['full-width']]: fullWidth,
        },
        className
      )}
      disabled={Boolean(disabled || loading)}
      {...rest}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        <>
          {leftIcon ? <span className={styles.icon}>{leftIcon}</span> : null}
          {children}
          {rightIcon ? <span className={styles.icon}>{rightIcon}</span> : null}
        </>
      )}
    </button>
  );
};
