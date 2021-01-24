import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';
import guides from './Guide';

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

  const Guide = Parse.Object.extend('Guide');
  const query = new Parse.Query(Guide);
  query.find().then((results) => {
    // You can use the "get" method to get the value of an attribute
    // Ex: response.get("<ATTRIBUTE_NAME>")
    if (typeof document !== 'undefined') document.write(`Guide found: ${JSON.stringify(results)}`);
    console.log('Guide found', results);
  }, (error) => {
    if (typeof document !== 'undefined') document.write(`Error while fetching Guide: ${JSON.stringify(error)}`);
    console.error('Error while fetching Guide', error);
  });

  return (
    <View style={styles.container}>
      <Text>Todos os GUIAS sendo obtidos (no console)</Text>
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
