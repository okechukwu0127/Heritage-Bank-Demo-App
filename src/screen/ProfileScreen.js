
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class ProfileScreen extends Component {
  constructor(props) {
    
     super(props)
          this.state={ }
  }

   render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#49A73D',
          justifyContent: 'flex-end'
        }}
      >
      <Text>PROFILE SCREEN</Text>
      </View>)
    }




}

export default ProfileScreen;
