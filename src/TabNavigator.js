import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator,BottomTabBar  } from "react-navigation-tabs";
//import { FontAwesome5 } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/AntDesign';

const TabBarComponent = (props) => <BottomTabBar {...props} />;



import {HomeHBScreen, JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from "./screen";
import AddButton from "./components/AddButton";
import { blue } from "@material-ui/core/colors";
//import HomeScreen_HB from './screen/HomeScreen_HB'

// https://dribbble.com/shots/7046707-Nav-Bar-Animation

 

const TabNavigator = createBottomTabNavigator(
    {
        Journal: {
            screen: HomeHBScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor }) =>{
                            return <Icon name="bank" size={22} color={tintColor}  />
                },
                tabBarLabel: 'Overview'
            }
        }, 
        Measures: {
            screen: MeasuresScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor }) =>
                {
                    return  <Icon name="mobile1" size={22}    color={tintColor} />
                },
                tabBarLabel: 'Airtime'
            }
        },
        Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon:  ({focused, tintColor }) =>{ return(<AddButton />) },
                 tabBarLabel: ' '
            }
        },
        Treatment: {
            screen: TreatmentScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor }) =>{
                            return <Icon name="swap" size={22}  color={tintColor}  />
                },
                tabBarLabel: 'Transfer'
            }
        } ,
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor }) =>  {
                    return <Icon name="barschart" size={22}  color={tintColor}  />
                },
                tabBarLabel: 'Bills'
            }
        } 
    },
    {
       
        tabBarOptions: {
            showLabel: false,
            activeTintColor:'#49A73D',
            inactiveTintColor:'#CDCCCE',
            showLabel :true,
            allowFontScaling :true,
            tabStyle  :{
                backgroundColor:blue,
                //height:90,
               
            },
            labelStyle :{
                 fontSize:8
            }
        },
        tabBarComponent: (props) => (
                 <TabBarComponent {...props} style={{ borderTopColor: '#605F60', borderWidth:2 }} />
    ),
    }
);



export default TabNavigator;
//export default createAppContainer(TabNavigator);