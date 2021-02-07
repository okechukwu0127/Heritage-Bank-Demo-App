import React, { Component } from 'react';
import { Button, View, Text,StatusBar,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';


import TabNavigator from "./TabNavigator";
import LoginAnimate from "./LoginAnimate";
import CodePushScreen from "./screen/CodePushScreen";


//Add this on top of App.js
import RNUxcam from 'react-native-ux-cam';


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}




const LoginsStack = createStackNavigator({
   CodePushScreen: CodePushScreen,
  LoginSingle: LoginAnimate,
 
},{
  initialRouteName:'CodePushScreen',
   headerMode :'none',
     navigationOptions: {     
            headerShown:false
     }
    });

 const TabberStack =  createStackNavigator(
    {
      Home: TabNavigator,      
      Settings: DetailsScreen,
    },
    
    {
     
       
       headerMode :'none',
      navigationOptions: {
           
            headerShown:true,
            headerTitle:'',
            headerStyle:{
              backgroundColor:'#49A73D'
            },
            headerRight:({ focused, tinColor })=>{ return  <Image
                                        source={require('./assets/HB_white.fw.png')}
                                        style={{ width: 70, height: 24,marginRight:20 }}></Image>},
            headerLeftContainerStyle: {
              //width:100,
              borderWidth:0,
               borderColor:'red',

            },
            headerLeft:()=>{ return (<View 
                                      style={{flexDirection:'row',
                                                 justifyContent:'space-between',
                                                  }}>
                                                  <View style={{marginLeft:20,marginTop:4}}><Icon name="menu-unfold" size={18} color="#FFF" /></View>
                                                  <View style={{marginLeft:15}}><Text style={{fontSize:20,fontWeight:'900',color:'#fff'}}>Overview</Text></View>
                                                  </View>)}
            
            
    }
    }); 


class AppNew  extends Component {

  componentDidMount(){

    //RNUxcam.optIntoSchematicRecordings(); // Add this line to enable iOS screen recordings
    RNUxcam.startWithKey('btchiyxd01cklgn'); 
    console.disableYellowBox = true;
    

  }


  

render()
{
  
    return (<View 
               style={{
              flex: 1,
              backgroundColor: '#49A73D',
              justifyContent: 'flex-end'
            }}>

       <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {true}    
                    translucent = {false}  
                />  
      
       <Tabber />
      </View>
     
    );

   //return <LoginAnimate/>
}

}

const Tabber = createAppContainer(
  createStackNavigator({
  
     
    Logins: LoginsStack,
     Home: TabberStack,
      
 
},
   {
      initialRouteName:'Logins',
       navigationOptions: {
           
            headerShown:false
        }
    }
  )
);

export default AppNew;