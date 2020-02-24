import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import Header from './components/Header';
import User from './components/User';
import Entries from './components/Entries';


import {uuid} from 'uuidv4';
import { Ionicons } from '@expo/vector-icons';

import {NativeRouter, Switch, Route} from 'react-router-native';


export default function App() {


  return (
    <NativeRouter>
      <View style={styles.container}>
          <Header />
        
          <Text style={styles.text} >NativePass!!</Text>
          <Switch >
            <Route exact path="/user" component={User} />
            <Route exact path="/entries" component={Entries} />
          </Switch>
      </View>
    </NativeRouter>
  );
}


// backup stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {color: 'green', fontSize: 30, marginBottom: 20},
 
});
