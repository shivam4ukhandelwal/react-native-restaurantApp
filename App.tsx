/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import MainNavigator from './src/routes/Main.stack';
import {Provider} from 'react-redux';
import {store} from './src/store/index';
import {Colors, FontFamily} from './src/themes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const LightNavigationTheme: Theme = {
  ...DefaultTheme, // Extend the default theme
  dark: false,
  colors: {
    ...DefaultTheme.colors, // Keep default colors
    primary: Colors.noonBlue,
    background: Colors.noonBlueLight,
    card: Colors.grey4,
    text: Colors.noonBlack,
    border: Colors.grey3,
    notification: Colors.systemRed,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: FontFamily.regular,
      fontWeight: '400',
    },
    bold: {
      fontFamily: FontFamily.bold,
      fontWeight: 'bold',
    },
  },
};

const RootStack: React.FC = () => {
  return (
    <NavigationContainer theme={LightNavigationTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.vipBlack : Colors.white,
    flex: 1,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView edges={['bottom']} style={backgroundStyle}>
          <Provider store={store}>
            <RootStack />
          </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

  export default App;
