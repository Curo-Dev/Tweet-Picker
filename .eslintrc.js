module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',      
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
    },
}