import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/app/[lang]/layout.tsx'],
  project: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: [
    // https://github.com/webpro/knip#reading-the-report
    'enumMembers',
    'nsExports',
    'nsTypes',
  ],
  ignore: [
    '.storybook',
    'src/shared/config/**',
    'src/i18n/**',
    'src/packages/mobx-form-models/**',
    'src/shared/lib/helpers/debounce.ts',
  ],
  ignoreDependencies: [
    'ajv',
    '@svgr/webpack',
    'typescript-eslint',
    'eslint-config-next',
    'eslint-config-react-app',
    'eslint-plugin-storybook',
    '@typescript-eslint/eslint-plugin',
  ],
};

export default config;
