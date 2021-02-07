
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
 import SwipeableCarousel from './../components/SwipeableCarousel'

  const { width, height } = Dimensions.get('window');
 

class HomeScreen_HB extends Component {
  constructor(props) {

   
    
     super(props)
          this.state={
              email: props.email
           }
  }

   render() {
    return (<SafeAreaView style={{width:100+'%', height:'auto',borderWidth:0, borderColor:'red' }}>
                      <View style={{width:100+'%', height:((height/2)-130),padding:10,backgroundColor:'transparent'}}>
                        
                             <SwipeableCarousel email={this.state.email}  />

                        </View>
                        </SafeAreaView>)
    }




}

export default HomeScreen_HB;
