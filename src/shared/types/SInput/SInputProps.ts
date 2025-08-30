import type { InputHTMLAttributes } from 'react';

import type { SInputSize } from './SInputSize';

export interface SInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: SInputSize;
  fullWidth?: boolean;
}
