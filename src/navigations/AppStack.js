import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './BottomTabs';
import DetailMovie from '../screens/DetailMovie/Detail';
import SplashScreen from '../screens/Splash Screen/SplashScreen';
import Login from '../screens/Login/Login';
const Stack = createStackNavigator();

const AppStack = () => {
  const [load, setLoad] = useState(true);
  const time = () => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };
  useEffect(() => {
    time();
  }, []);

  if (load) {
    return <SplashScreen></SplashScreen>;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={DetailMovie} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
