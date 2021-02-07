
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {TabsConfig, BubbleTabBarItemConfig} from '@gorhom/animated-tabbar';
import SvgIcon from '@material-ui/core/SvgIcon';

import HomeScreen from './screen/HomeScreen'
import ProfileScreen from './screen/ProfileScreen'

import LoginAnimate from "./LoginAnimate";
import TabNavigator from "./TabNavigator";

function HomeScreenMain({ navigation }) {
    //alert(JSON.stringify(navigation))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      
      <Button
        title="Go to LoginScreen"
        onPress={() =>
            {
               
                navigation.navigate('LoginAnimate')
            } }
      />
      <Text>{' - '}</Text>

      <Button
      style={{marginTop:20}}
        title="Go to BottomTab"
        onPress={() =>
            {
               
                navigation.navigate('BottomTab')
            } }
      />

      <Text>{' - '}</Text>

      <Button
      style={{marginTop:20}}
        title="Go to TabNavigator"
        onPress={() =>
            {
               
                navigation.navigate('TabNavigator')
            } }
      />


      
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTab({ navigation }) {
  return (
    
      <Tab.Navigator /*  tabBar={props => (<AnimatedTabBar tabs={tabs} {...props} />)} */ >

        <Tab.Screen  name="HomeScreen"  component={HomeScreen} />
        
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />

      </Tab.Navigator>
   
  )
}



const Stack = createStackNavigator();


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const tabs = {
  Home: { // < Screen name
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component:    <SvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: { // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: <SvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};



class App extends Component {

    constructor(props)
    {
        super(props)
    }

    componentDidMount(props)
    {
        //alert(JSON.stringify(this.props))
    }
   
    render(){

        return(<TabNavigator/>)

        /*  return (<NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen" 
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                headerShown:false,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
                >
                    <Stack.Screen 
                            name="HomeScreenMain" 
                            component={HomeScreenMain} 
                            options={{
                                        transitionSpec: {
                                        open: config,
                                        close: config,
                                        },
                                    }}
                            />
                    <Stack.Screen name="LoginAnimate" component={LoginAnimate} />
                    <Stack.Screen name="BottomTab" component={BottomTab} />
                     <Stack.Screen name="TabNavigator" component={TabNavigator} />

                    

                    
                </Stack.Navigator>
                </NavigationContainer>
            ); */

    }
 
}

export default App;