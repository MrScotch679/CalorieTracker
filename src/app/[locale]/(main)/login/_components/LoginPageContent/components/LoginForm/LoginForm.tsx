'use client';

import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Namespace } from '@/i18n/namespaces';
import { SButton, SInput } from '@/shared';

import { LoginFormStore } from './LoginFormStore';

import styles from './LoginForm.module.scss';

export type INPUTS_SCHEMA = z.infer<typeof INPUTS_SCHEMA>;

const INPUTS_SCHEMA = z.object({
  email: z.email({ message: 'Invalid email' }),
  password: z.string().min(8).max(12, { message: 'Password must be between 8 and 12 characters' }),
});

export const LoginForm = observer(() => {
  const t = useTranslations(Namespace.LOGIN);

  const store = useMemo(() => new LoginFormStore(), []);

  const { isLoading, login } = store;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INPUTS_SCHEMA>();

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
