import React from 'react';
import {Text, View} from 'react-native';
import { useSelector } from 'react-redux';
function ProfileScreen() {
  const {api_data} = useSelector(state => state.userReducer);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{JSON.stringify(api_data)}</Text>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
