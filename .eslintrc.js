module.exports = {
  root: true,
  extends: ['airbnb-typescript-prettier', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', '^@?\\w.*\\u0000$'],
          ['(?<!\\u0000)$', '(?<=\\u0000)$'],
          ['^\\.', '^\\..*\\u0000$'],
        ],
      },
    ],
  },
};
