import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['src/**/*.{ts,js}'], // or ["**/*.{ts,js}"] if you prefer
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // enable only if you need type-aware rules
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
  },
  prettierRecommended,
  prettierConfig,
];
