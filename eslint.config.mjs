import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import * as regexpPlugin from 'eslint-plugin-regexp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      'node_modules',
      '.pnp',
      '**/.pnp.js',
      'coverage',
      'build',
      '**/.DS_Store',
      '**/.env.local',
      '**/.env.development.local',
      '**/.env.test.local',
      '**/.env.production.local',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/.idea',
      '**/.vscode',
      '.next',
      '**/public',
    ],
  },
  ...fixupConfigRules(compat.extends('react-app', 'eslint-config-next', 'next/core-web-vitals')),
  {
    plugins: {
      '@stylistic': stylistic,
      'react-hooks-extra': reactHooksExtra,
    },
    rules: {
      complexity: ['warn', 25],
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          reservedFirst: ['key', 'ref', 'dangerouslySetInnerHTML'],

          ignoreCase: true,
          shorthandLast: false,
          shorthandFirst: false,
          noSortAlphabetically: true,
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      'line-comment-position': [
        'warn',
        {
          position: 'above',
        },
      ],

      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'if',
            'do',
            'while',
            'for',
            'switch',
            'try',
            'with',
            'continue',
            'break',
          ],
        },
        {
          blankLine: 'always',
          prev: ['if', 'do', 'while', 'for', 'switch', 'try', 'with'],
          next: '*',
        },
      ],

      'no-redeclare': 0,
      '@typescript-eslint/no-redeclare': 0,

      'react/button-has-type': 1,
      'react/display-name': 0,
      'import/no-anonymous-default-export': 0,

      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '^(useDebouncedCallback)$',
        },
      ],

      '@typescript-eslint/member-ordering': [
        1,
        {
          classes: [
            'public-static-field',
            'private-static-field',

            'public-instance-field',
            'private-instance-field',

            'constructor',

            'public-static-method',
            'private-static-method',

            'public-get',
            'private-get',

            'public-set',
            'private-set',

            'public-instance-method',
            'private-instance-method',

            'public-decorated-field',
            'private-decorated-field',
          ],
        },
      ],

      // Warn about explicit 'any' usage
      '@typescript-eslint/no-explicit-any': 'warn',

      // Consistently import navigation APIs from `@/i18n/routing`
      // https://next-intl.dev/docs/workflows/linting#consistent-usage-of-navigation-apis
      'no-restricted-imports': [
        1,
        {
          name: 'next/link',
          message: 'Please import from `i18n/routing` instead.',
          importNames: ['default'],
        },
        {
          name: 'next/navigation',
          importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
          message: 'Please import from `i18n/routing` instead.',
        },
      ],

      // https://blog.dwac.dev/posts/html-whitespace/
      'react/jsx-no-literals': 1,
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
    },
  },

  regexpPlugin.configs['flat/recommended'],
];
