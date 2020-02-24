import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Menu from './Menu';
import Drawer from 'react-native-drawer'

import {withRouter} from 'react-router-native';


const ControlPanel = ({opened,history,onClose}) => {
  return (
    <View>
      <Text>This is the drawer navigation. Opened?: {opened ? opened: "no"}</Text>
      <Button title="User1" onPress={() => history.push('/user')} />
      <Button title="Entries" onPress={() => history.push('/entries')} />
      <Button title="close" onPress={() => onClose()} />
    </View>
  )
}


 function Header({history}) {

  const [drawerOpened, toggleDrawer] = useState(false);

  function onClose(){
    toggleDrawer(false)
  }

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      textAlign: 'right',
      justifyContent: 'center',
    }}>
      
      <View style={styles.header}>
          <Text >NativePass</Text>
          <Ionicons name="md-menu" size={32} color="green" onPress={() => toggleDrawer(!drawerOpened)} />
      </View>
      <View style={{
        width: 210,
        height: 200,
        alignSelf: 'flex-end',
        display: 'flex',
        backgroundColor: 'red',
        right: 0,
        top: 0,
        zIndex: 999,
        paddingTop: 30,
      }}>
        <Drawer 
          open={drawerOpened}
          content={<ControlPanel opened={drawerOpened} history={history} onClose={() => onClose()} />}
          side={"right"}
          tapToClose={true}
          
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    drawerContainer:{
      backgroundColor: '#a9a999',
      marginTop:20,
      // width: 200,  
    },
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
        // zIndex: 6,
    }
})

export default withRouter(Header);