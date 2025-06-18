// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';

// Імпортуємо shareable config як модулі
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooksRecommended from 'eslint-plugin-react-hooks/configs/recommended.js';
import tsRecommended from '@typescript-eslint/eslint-plugin/dist/configs/recommended.js';
import prettierRecommended from 'eslint-plugin-prettier/configs/recommended.js';

export default [
  // Ігнорування файлів і папок
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'client/dist/**',
      'server/dist/**',
    ],
  },

  // Базова конфігурація для всіх файлів
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    ...js.configs.recommended,
  },

  // Конфігурація для клієнтської частини (React + TypeScript)
  {
    files: ['client/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./client/tsconfig.json', './client/tsconfig.node.json'],
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      '@typescript-eslint': tseslint,
      prettier: pluginPrettier,
    },
    ...reactRecommended,
    ...reactJsxRuntime,
    ...reactHooksRecommended,
    ...tsRecommended,
    ...prettierRecommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error',
    },
  },

  // Конфігурація для серверної частини (Node.js + TypeScript)
  {
    files: ['server/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./server/tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: pluginPrettier,
    },
    ...tsRecommended,
    ...prettierRecommended,
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error',
    },
  },
];
