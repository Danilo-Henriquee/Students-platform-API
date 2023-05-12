module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'quote-props': 'off',
  },
};
