import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

import styles from './SText.module.scss';

export type STextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'overline';

export type STextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type STextTone =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'warning'
  | 'error'
  | 'accent'
  | 'link';

type Align = 'left' | 'center' | 'right' | 'justify';
type Transform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export interface STextProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  variant?: STextVariant;
  weight?: STextWeight;
  tone?: STextTone;
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

const defaultElementByVariant: Record<STextVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'p',
  body: 'p',
  caption: 'span',
  overline: 'span',
};

export const SText = (props: STextProps) => {
  const {
    asChild,
    variant = 'body',
    weight = 'regular',
    tone = 'primary',
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

  const Component: ElementType = defaultElementByVariant[variant] ?? 'p';

  const classNames: string = clsx(
    styles.root,
    styles[`variant-${variant}`],
    styles[`weight-${weight}`],
    styles[`tone-${tone}`],
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
    <Component className={classNames} style={styleWithClamp} {...rest}>
      {children}
    </Component>
  );
};
