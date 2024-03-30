import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator initialRouteName='WebViewScreen' >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />

      </Stack.Navigator>
  
  );
}

export default MainNavigation;
