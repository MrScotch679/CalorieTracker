import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

import type { Align, STextColor, STextWeight } from '../SText/SText';
import { SText } from '../SText/SText';

import styles from './SH4.module.scss';

export interface SH4Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  color?: STextColor;
  align?: Align;
  weight?: STextWeight;
  className?: string;
  children: ReactNode;
}

export const SH4 = ({
  color,
  align,
  weight = 'semibold',
  className,
  children,
  ...rest
}: SH4Props) => {
  return (
    <SText
      asChild
      color={color}
      align={align}
      weight={weight}
      className={clsx(styles.root, className)}
      {...rest}
    >
      <h4>{children}</h4>
    </SText>
  );
};
