'use client';

import clsx from 'clsx';
import { useId } from 'react';

import type { SInputProps } from '../../types/SInput/SInputProps';

import styles from './SInput.module.scss';

export const SInput = (props: SInputProps) => {
  const {
    label,
    description,
    error,
    size = 'md',
    fullWidth,
    className,
    id,
    disabled,
    ...rest
  } = props;

  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <div className={clsx(styles.root, className, { [styles['full-width']]: fullWidth })}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}

      <div
        className={clsx(styles.control, styles[`size-${size}`], {
          [styles['is-error']]: Boolean(error),
          [styles['is-disabled']]: Boolean(disabled),
        })}
      >
        <input id={inputId} className={styles.input} disabled={disabled} {...rest} />
      </div>

      {description && !error ? <div className={styles.description}>{description}</div> : null}
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};
