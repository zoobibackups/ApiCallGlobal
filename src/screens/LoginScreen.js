import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {LoginUser} from '../store/actions/userActions';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
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
}

const mapStateToProps = state => {
  const {api_data, jwt_token} = state.userReducer;
  return {
    api_data: api_data,
    jwt_token,
  };
};

const mapDispatchToProps = {
  LoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
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
