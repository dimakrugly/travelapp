module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Path to your tsconfig.json file
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript'],
  rules: {
    'react/jsx-filename-extension':0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
