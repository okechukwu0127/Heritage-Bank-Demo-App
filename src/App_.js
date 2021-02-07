/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
    createAppContainer,
    createMaterialTopTabNavigator, 
    createDrawerNavigator, 
    createSwitchNavigator,

    createStackNavigator, 
    createBottomTabNavigator,
 } from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 import { FluidNavigator, createFluidNavigator } from 'react-navigation-fluid-transitions';
import LoginAnimate from "./LoginAnimate";


const FirstScreen = FluidNavigator({
    LoginAnimate: {
      screen: LoginAnimate,
    },
    Home: {
      screen: Home,
    }

  },{
    initialRouteName:'LoginAnimate',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
    
});
  const FirstScreenData = createAppContainer(FirstScreen); 


class AppLogin  extends Component {


  

render()
{
  
    return (
      <FirstScreenData />
    );

   //return <LoginAnimate/>
}

}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AppLogin;
