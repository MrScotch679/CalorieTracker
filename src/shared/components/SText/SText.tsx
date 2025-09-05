import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import styles from './SText.module.scss';

export type STextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type STextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'warning'
  | 'error'
  | 'accent'
  | 'link';

export type Align = 'left' | 'center' | 'right' | 'justify';
type Transform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export interface STextProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: STextWeight;
  color?: STextColor;
  align?: Align;
  transform?: Transform;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  noWrap?: boolean;
  truncate?: boolean;
  clamp?: number;
  className?: string;
  children: ReactNode;
}

export const SText = (props: STextProps) => {
  const {
    asChild,
    weight = 'regular',
    color = 'primary',
    align,
    transform,
    italic,
    underline,
    strikethrough,
    noWrap,
    truncate,
    clamp,
    className,
    style,
    children,
    ...rest
  } = props;

  const classNames: string = clsx(
    styles.root,
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    align && styles[`align-${align}`],
    transform && styles[`transform-${transform}`],
    {
      [styles.italic]: italic,
      [styles.underline]: underline,
      [styles.strikethrough]: strikethrough,
      [styles['no-wrap']]: noWrap,
      [styles.truncate]: truncate,
      [styles.clamp]: Boolean(clamp),
    },
    className
  );

  const styleWithClamp: CSSProperties | undefined = clamp
    ? ({ ...(style as object), ['--clamp-lines' as string]: String(clamp) } as CSSProperties)
    : style;

  if (asChild) {
    return (
      <Slot className={classNames} style={styleWithClamp} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <p className={classNames} style={styleWithClamp} {...rest}>
      {children}
    </p>
  );
};
