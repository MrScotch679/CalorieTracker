'use client';

import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { z } from 'zod';

import { Namespace } from '@/i18n/namespaces';
import { SButton, SInput, useZodForm } from '@/shared';

import { LoginFormStore } from './LoginFormStore';

import styles from './LoginForm.module.scss';

export const LoginForm = observer(() => {
  const t = useTranslations(Namespace.LOGIN);

  const store = useMemo(() => new LoginFormStore(), []);

  const { isLoading, login } = store;

  const schema = z.object({
    email: z.email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(64, { message: 'Password must be at most 64 characters' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({
    schema,
    mode: 'onSubmit',
  });

  return (
    <form autoComplete="on" className={styles.root} onSubmit={handleSubmit(login)}>
      <SInput
        type="email"
        autoComplete="email"
        size="lg"
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        {...register('email')}
        error={errors.email?.message}
      />

      <SInput
        type="text"
        autoComplete="current-password"
        size="lg"
        label={t('form.password.label')}
        placeholder={t('form.password.placeholder')}
        {...register('password')}
        error={errors.password?.message}
      />

      <SButton type="submit" size="md" loading={isLoading}>
        {t('form.button')}
      </SButton>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
