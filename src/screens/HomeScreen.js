import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import apiCall from '../funtions/apiCall';
import { setPeriodicData } from '../store/actions/userActions';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timeinterval = setInterval(async () => {
      const {jwt_token} = this.props;
      const {count} = this.state;
      const myData = await apiCall(jwt_token, count);
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
      this.props.setPeriodicData(myData);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeinterval);
  }

  render() {
    const {navigation, api_data} = this.props;
    return (
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}
            style={styles.buttonStyle}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              Profile Screen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}
            style={styles.buttonStyle}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              Setting Screen
            </Text>
          </TouchableOpacity>
          <Text style={{margin: 20}}>{JSON.stringify(api_data)}</Text>
        </View>
      </ScrollView>
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
  setPeriodicData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
