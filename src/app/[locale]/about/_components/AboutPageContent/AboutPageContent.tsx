'use client';

import { SButton, SInput } from '@/shared';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const;
const sizes = ['sm', 'md', 'icon'] as const;

export const AboutPageContent = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: 'var(--space-32)',
        padding: 'var(--space-32)',
      }}
    >
      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Variants'}</h3>
        <div style={{ display: 'grid', gap: 'var(--space-12)' }}>
          {variants.map(v => (
            <div
              key={v}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-12)',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ width: '8rem' }}>{v}</span>
              <SButton variant={v}>{'Default'}</SButton>
              <SButton variant={v} disabled>
                {'Disabled'}
              </SButton>
              <SButton variant={v} loading>
                {'Loading'}
              </SButton>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Inputs – states'}</h3>
        <div style={{ display: 'grid', gap: 'var(--space-12)' }}>
          <SInput label={'Default'} placeholder={'Enter text'} />
          <SInput
            label={'With description'}
            description={'Helpful hint about this field'}
            placeholder={'Enter value'}
          />
          <SInput
            label={'With error'}
            error={'This field is required'}
            placeholder={'Enter value'}
          />
          <SInput label={'Disabled'} disabled placeholder={'Not editable'} />
          <SInput label={'Number'} type={'number'} placeholder={'0'} />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Inputs – sizes'}</h3>
        <div
          style={{
            display: 'grid',
            gap: 'var(--space-12)',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          }}
        >
          <SInput label={'Small'} size={'sm'} placeholder={'Small size'} />
          <SInput label={'Medium'} size={'md'} placeholder={'Medium size'} />
          <SInput label={'Large'} size={'lg'} placeholder={'Large size'} />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Input – full width'}</h3>
        <div style={{ maxWidth: 420 }}>
          <SInput fullWidth label={'Full width'} placeholder={'Stretches to container width'} />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Sizes (primary)'}</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-12)',
            flexWrap: 'wrap',
          }}
        >
          {sizes.map(s => (
            <SButton key={s} size={s}>
              {s === 'icon' ? '🔍' : s.toUpperCase()}
            </SButton>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 'var(--space-16)' }}>{'Full width'}</h3>
        <div style={{ maxWidth: 420 }}>
          <SButton fullWidth>{'Full width button'}</SButton>
        </div>
      </section>
    </div>
  );
};
