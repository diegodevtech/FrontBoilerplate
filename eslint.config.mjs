import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'linebreak-style': ['error', 'unix'],
      'no-console': 'warn',
      'indent': ['warn', 2],
      'no-var': 'error',
      'no-const-assign': 'error',
      'no-cond-assign': 'error',
      'no-self-assign': 'warn',
      'no-template-curly-in-string': 'error',
      'arrow-body-style': ['warn', 'as-needed'],
      'camelcase': 'error',
      'capitalized-comments': 'warn',
      'curly': 'error',
      'default-case': 'error',
      'default-case-last': 'warn',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'no-else-return': 'warn',
      'prefer-const': 'warn',
      'require-await': 'error',
    },
  }
];

export default eslintConfig;
