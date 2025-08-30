'use client';

import { SButton } from '@/shared';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const;
const sizes = ['sm', 'md', 'lg', 'icon'] as const;

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
