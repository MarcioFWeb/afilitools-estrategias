import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const App = () => {
  useEffect(() => {
    createInstallation = async () => {
    const Installation = Parse.Object.extend(Parse.Installation);
    const installation = new Installation();
        
    installation.set('deviceType', Platform.OS);
    await installation.save();
    };
    
    createInstallation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! TESTE COM PARSE</Text>
      <StatusBar style="auto" />
    </View>
  )

}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
