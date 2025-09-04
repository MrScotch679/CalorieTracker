'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Namespace } from '@/i18n/namespaces';
import { SButton, SInput } from '@/shared';

import { SignUpFormStore } from './SignUpFormStore';

import styles from './SignUpForm.module.scss';

export const SignUpForm = () => {
  const t = useTranslations(Namespace.SIGNUP);
  const INPUTS_SCHEMA = z.object({
    name: z
      .string()
      .min(2, { message: t('form.errors.nameMin') })
      .max(50, { message: t('form.errors.nameMax') })
      .regex(
        /^[A-Za-zАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя][A-Za-zАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя\s-]*$/,
        {
          message: t('form.errors.nameType'),
        }
      )
      .refine(value => value.replace(/\s+/g, '').length > 0, {
        message: t('form.errors.nameSpaces'),
      }),
    email: z.string().email({ message: t('form.errors.invalidEmail') }),
    password: z
      .string()
      .min(8, { message: t('form.errors.passwordMin') })
      .max(12, { message: t('form.errors.passwordMax') }),
  });
  type INPUTS_SCHEMA = z.infer<typeof INPUTS_SCHEMA>;
  const store = useMemo(() => new SignUpFormStore(), []);

  const { isLoading, login } = store;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INPUTS_SCHEMA>({
    resolver: zodResolver(INPUTS_SCHEMA),
    mode: 'onBlur',
  });

  return (
    <form autoComplete="on" className={styles.root} onSubmit={handleSubmit(login)}>
      <SInput
        type="text"
        autoComplete="name"
        size="lg"
        label={t('form.name.label')}
        placeholder={t('form.name.placeholder')}
        {...register('name')}
        error={errors.name?.message}
      />
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
        type="password"
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
};

SignUpForm.displayName = 'SignUpForm';
