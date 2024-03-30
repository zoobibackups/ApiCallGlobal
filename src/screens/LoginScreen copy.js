import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {LoginUser} from '../store/actions/userActions';
import {useDispatch} from 'react-redux';
function LoginScreen({navigation}) {
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Text>Login Here</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(LoginUser('this_is_the_login_token_of_user'));
        }}
        style={styles.buttonStyle}>
        <Text style={{color: '#fff', fontWeight: '600'}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
    backgroundColor: '#0090FF',
    width: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
