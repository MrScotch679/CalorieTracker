'use client';

import type { ReactNode } from 'react';

import { configureMobX } from '@/shared/config/mobx';

interface Props {
  children: ReactNode;
}

configureMobX();

export const MobxProvider = (props: Props) => {
  const { children } = props;

  return <>{children}</>;
};
