import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { SButtonSize } from './SButtonSize';
import type { SButtonVariant } from './SButtonVariant';

interface BaseProps {
  variant?: SButtonVariant;
  size?: SButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

export type SButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
