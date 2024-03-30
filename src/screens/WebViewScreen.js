import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
function WebViewScreen({navigation}) {
  const [url, setUrl] = useState(null);
  return (
  
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <TextInput value={url} style={{width: 300, height: 50}} />
        <WebView
          style={{width: Dimensions.get('screen').width, height: 800}}
          source={{uri: 'https://google.com'}}
          onNavigationStateChange={navState => {
            setUrl(navState.url);
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            padding:20,
            backgroundColor: '#0090FF',
          }}
          onPress={() => Alert.alert('URL', url)}>
          <Text>DownLoad</Text>
        </TouchableOpacity>
      </View>
    
  );
}

export default WebViewScreen;

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
