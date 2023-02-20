module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true
}
