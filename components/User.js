import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const User = (props) => {
  return (
    <View >
       <Image  style={styles.img} source={{uri: 'https://picsum.photos/200'}} style={styles.img} />
       <Text >User is: {props.user && props.user.name} </Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
      }
})


export default User;
