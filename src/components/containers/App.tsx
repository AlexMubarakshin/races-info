import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';

import configureStore from '../../store/store';

import { Navigation } from '../navigation';

const App = () => {
  const store = configureStore();
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
