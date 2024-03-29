import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
   
  );
}

export default AuthStack;
