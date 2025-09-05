import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

import type { Align, STextColor, STextWeight } from '../SText/SText';
import { SText } from '../SText/SText';

import styles from './SH2.module.scss';

export interface SH2Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  color?: STextColor;
  align?: Align;
  weight?: STextWeight;
  className?: string;
  children: ReactNode;
}

export const SH2 = ({ color, align, weight = 'bold', className, children, ...rest }: SH2Props) => {
  return (
    <SText
      asChild
      color={color}
      align={align}
      weight={weight}
      className={clsx(styles.root, className)}
      {...rest}
    >
      <h2>{children}</h2>
    </SText>
  );
};
