import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import {useHistory} from 'react-router-native';

import Drawer from 'react-native-drawer'
import { Ionicons, FontAwesome } from '@expo/vector-icons';



const ControlPanel = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <Text>This is the drawer navigation. Opened?: {props.opened ? props.opened: "no"}</Text>
      <Button title="User1" onPress={() => history.push('/user')} />
      <Button title="Entries" onPress={() => history.push('/entries')} />
    </View>
  )
}

const Menu = () => {

  const [drawerOpened, toggleDrawer] = useState(true);


  return (
    <View style={styles.wrapper}>
       <Ionicons name="md-menu" size={32} color="green" onPress={() => toggleDrawer(!drawerOpened)} />
        <Drawer 
          open={drawerOpened}
          content={<ControlPanel opened={drawerOpened} />}
          // side={"right"}
          styles={{
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          }}
        >
          
        </Drawer>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
      display: 'flex',
      flexDirection: 'row',
      
  },
  drawerContainer:{
    backgroundColor: '#a9a999',
    marginTop:20,
    // width: 200,  
  }
})


export default Menu;
