import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../funtions/apiCall';
import {setPeriodicData} from '../store/actions/userActions';
function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {jwt_token, api_data} = useSelector(state => state.userReducer);
  const [count, setCount] = useState(0)
  useEffect( () => {
    let timeinterval = setInterval( async() => {
      let myData = await apiCall(jwt_token, count);
      setCount(count => count + 1)
      dispatch(setPeriodicData(myData));
    }, 5000);

    return () => clearInterval(timeinterval);
  }, [count]);

  return (
    <ScrollView>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.buttonStyle}>
        <Text style={{color: '#fff', fontWeight: '600'}}>Profile Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SettingScreen')}
        style={styles.buttonStyle}>
        <Text style={{color: '#fff', fontWeight: '600'}}>Setting Screen</Text>
      </TouchableOpacity>

      <Text style={{margin:20}} >{JSON.stringify(api_data)}</Text>
    </View>
    </ScrollView>
  );
}

export default HomeScreen;

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
