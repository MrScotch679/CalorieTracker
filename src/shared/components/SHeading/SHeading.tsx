import clsx from 'clsx';
import type { ElementType, HTMLAttributes, ReactElement, ReactNode } from 'react';

import type { Align, STextColor, STextWeight } from '../SText/SText';
import { SText } from '../SText/SText';

import styles from './SHeading.module.scss';

type HeadingLevel = 1 | 2 | 3 | 4;

const HEADING_TAGS: Record<HeadingLevel, 'h1' | 'h2' | 'h3' | 'h4'> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
};

interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  headingLevel: HeadingLevel;
  color?: STextColor;
  align?: Align;
  weight?: STextWeight;
  className?: string;
  children: ReactNode;
}

export const SHeading = (props: Props): ReactElement => {
  const { headingLevel, className, children, ...rest } = props;

  const Tag: ElementType = HEADING_TAGS[headingLevel];

  return (
    <SText asChild className={clsx(styles.root, styles[`h${headingLevel}`], className)} {...rest}>
      <Tag>{children}</Tag>
    </SText>
  );
};
