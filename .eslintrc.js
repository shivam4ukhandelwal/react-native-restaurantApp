module.exports = {
  root: true,
  extends: ['@react-native', '@react-native/eslint-config'],
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jest',
    // 'unused-imports',
  ],
  rules: {
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'warn',
    'react-native/sort-styles': 0,
    'react-native/no-unused-styles': 0,
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // 'unused-imports/no-unused-imports': 'warn',
    // 'unused-imports/no-unused-vars': 'warn',
  },
};
