module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@store': './src/store',
          '@screens': './src/screens',
          '@services': './src/services',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
