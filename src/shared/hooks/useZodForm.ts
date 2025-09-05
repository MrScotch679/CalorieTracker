'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import type { FieldValues, Resolver, UseFormProps, UseFormReturn } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormValuesFromSchema<TSchema extends z.ZodTypeAny> =
  z.infer<TSchema> extends FieldValues ? z.infer<TSchema> : never;

export type UseZodFormOptions<TSchema extends z.ZodTypeAny> = Omit<
  UseFormProps<FormValuesFromSchema<TSchema>>,
  'resolver'
> & { schema: TSchema };

export const useZodForm = <TSchema extends z.ZodTypeAny>(
  options: UseZodFormOptions<TSchema>
): UseFormReturn<FormValuesFromSchema<TSchema>> => {
  const { schema, ...formOptions } = options;

  const resolver = useMemo(
    // @ts-expect-error
    // zod v4 resolver generic typing mismatch; runtime-compatible
    () => zodResolver(schema),
    [schema]
  ) as unknown as Resolver<FormValuesFromSchema<TSchema>>;

  return useForm<FormValuesFromSchema<TSchema>>({
    resolver,
    ...formOptions,
  });
};
