import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainNavigation from './MainNavigation';
function MainStack() {
 const {jwt_token} = useSelector(state => state.userReducer)
  return (
    <NavigationContainer>
     {jwt_token ? <MainNavigation /> :<AuthStack /> }
    </NavigationContainer>
  );
}

export default MainStack;
