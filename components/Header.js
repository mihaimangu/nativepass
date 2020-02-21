import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.header}>
       <Text>NativePass</Text>
       <Ionicons name="md-menu" size={32} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        // width: 100,
        backgroundColor: '#D9D9D9',
        textAlign: 'center',
        marginTop: 50,
    }
})

