
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class HomeScreen extends Component {
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
      <Text>HOME SCREEN</Text>
      </View>)
    }




}

export default HomeScreen;
