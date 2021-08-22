import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Navigator from './src/router';
import { default as myTheme } from './src/theme.json';
import mapping from './src/mapping.json';
import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from './src/theme-context';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [theme, setTheme] = React.useState('dark');
  const loadFonts = () => {
    return Font.loadAsync({
      'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    });
  };

  const [fontsLoaded, setFontsLoded] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoded(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={{ ...eva[theme], ...myTheme }}>
              <ApplicationProvider
                {...eva}
                theme={{ ...eva[theme], ...myTheme }}
                customMapping={mapping}
              >
                <StatusBar />
                <Navigator />
              </ApplicationProvider>
            </ThemeProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}
