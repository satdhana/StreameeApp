import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Explore/Explore';
import Series from '../screens/Series/Series';
import About from '../screens/About/About';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BottomTabs = () => {
  console.log(Platform);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 1)',
          height:
            Platform.OS == 'android' ? windowHeight * 0.09 : windowHeight * 0.2,
          elevation: 0,
          borderTopWidth: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
        headerShown: true,
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#828387',
        tabBarActiveTintColor: '#3BAF93',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '700', marginBottom: 10},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? 25 : 20;
          } else if (route.name == 'Series') {
            iconName = focused ? 'tv' : 'tv-outline';
            size = focused ? 25 : 20;
          } else if (route.name == 'Profil') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
            size = focused ? 25 : 20;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Series"
        component={Series}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profil"
        component={About}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
