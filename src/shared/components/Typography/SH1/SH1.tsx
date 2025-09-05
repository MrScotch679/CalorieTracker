import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

import type { Align, STextColor, STextWeight } from '../../SText/SText';
import { SText } from '../../SText/SText';

import styles from './SH1.module.scss';

export interface SH1Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  color?: STextColor;
  align?: Align;
  weight?: STextWeight;
  className?: string;
  children: ReactNode;
}

export const SH1 = ({ color, align, weight = 'bold', className, children, ...rest }: SH1Props) => {
  return (
    <SText
      asChild
      color={color}
      align={align}
      weight={weight}
      className={clsx(styles.root, className)}
      {...rest}
    >
      <h1>{children}</h1>
    </SText>
  );
};
