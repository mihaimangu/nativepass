import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import {useHistory} from 'react-router-native';

const Menu = () => {
    const history = useHistory();

  return (
    <View style={styles.wrapper}>
       <Button title="User" onPress={() => history.push('/user')} />
       <Button title="Entries" onPress={() => history.push('/entries')} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
      display: 'flex',
      flexDirection: 'row',
  }
})


export default Menu;
