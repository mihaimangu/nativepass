import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import {uuid} from 'uuidv4';


const Entries = () => {

    const [items, setItems] = useState([
        {id: uuid(), text: '11.02.2020', location: 'Gold\'s gym1'},
        {id: uuid(), text: '09.02.2020', location: 'Gold\'s gym1'},
        {id: uuid(), text: '08.02.2020', location: 'Gold\'s gym1'},
        {id: uuid(), text: '07.02.2020', location: 'Gold\'s gym1'},
    ])
    
  return (
    <View style={styles.container} >
        <Text style={styles.heading}>These are the entries</Text>
       <FlatList data={items} renderItem={({item}) => (
           <View style={styles.wrapper}>
                <Text style={{marginRight: 10}}>{item.location}</Text>
                <Text style={{marginRight: 10}}>{item.text}</Text>
                
            </View>
        )}  />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'right',
        
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
      }
})


export default Entries;
