// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Codebase relies on typed error subclasses and index signatures
      // throughout; keep these as warnings rather than hard failures for
      // the first pass so CI is useful without a disruptive rewrite.
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    // Compiled output and build artifacts are never linted.
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/*.d.ts',
      '**/node_modules/**',
      '**/*.tsbuildinfo',
    ],
  },
);
