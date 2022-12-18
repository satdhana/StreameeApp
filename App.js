import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import {Provider} from 'react-redux';
import storeRedux from './src/redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
