import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Navigator from './src/router';
import myTheme from './src/theme';
import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from './src/theme-context';

import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular,
  Roboto_300Light,
} from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
    Roboto_300Light,
  });

  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
              <StatusBar />
              <Navigator />
            </ApplicationProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}
