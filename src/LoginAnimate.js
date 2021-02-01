import React, { Component } from 'react';
import { View, Text, StyleSheet,/*  Image, */ Dimensions,TextInput,StatusBar,TouchableOpacity   } from 'react-native';

import Svg, {Image,Circle, ClipPath, Path } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';


const { width, height } = Dimensions.get('window');


const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  concat,
  Extrapolate
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
class LoginAnimate extends Component {
  constructor(props) {
    
     super(props)
          this.state={
        
          loggedIn: false,
          userInfo:null,
       
        }

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

     this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);

    

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 - 90 , 0],
      extrapolate: Extrapolate.CLAMP
    });


     this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

     this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
  }

   componentDidMount(){

     GoogleSignin.configure({  
          webClientId: '937554167743-nfs0mudbd5m4bq856jpklbs8cs3cb7ao.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
         forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        });
   
  }

   _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo: userInfo, loggedIn: true });
       // console.log(JSON.stringify(userInfo))
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          //console.log('SIGN_IN_CANCELLED')
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          //console.log('IN_PROGRESS')
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          //console.log('PLAY_SERVICES_NOT_AVAILABLE')
          // play services not available or outdated
        } else {
          //console.log('UNKNWON SIGNIN ERROR')
          // some other error happened
        }
      }
    };

     getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({ userInfo });
        //console.log('LOGGED IN')
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
          //console.log('SIGN_IN_REQUIRED')
          this.setState({ loggedIn: false });
        } else {
          //console.log('UNKOWN PROFILE ERROR')
          // some other error
          this.setState({ loggedIn: false });
        }
      }
    };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#49A73D',
          justifyContent: 'flex-end'
        }}
      >

       <StatusBar  
                    backgroundColor = "#fff"  
                    barStyle = "dark-content"   
                    hidden = {true}    
                    translucent = {false}  
                />  
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >


          <Animated.View style={{
            zIndex:this.textInputZindex,
            opacity:this.textInputOpacity,
            transform:[{translateY:this.textInputY}],
            height:80,
            bottom:0,
            justifyContent:'center',
            height:80, width:100,
            //backgroundColor:'white',
            borderRadius:20,
            // borderColor:'rgba(0,0,0,0.5)',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            
            left:width /2.8,
            

           }}>


            <Svg height={74} width={115}>
          
         <Image
            href={require('./assets/logoOutline.png')}
            height={74} 
            width={120}
           // preserveAspectRatio="xMidYMid slice"
            //clipPath="url(#clip)"
          />
        </Svg>

               
              </Animated.View>

        <Svg height={height+50} width={width}>
         
          <ClipPath id="clip">
              <Circle 
              cx={width/2}
            
            r={height+50}
            stroke="blue"
            strokeWidth="2.5"
            fill="red"
             // r={height+50} cx={width/6} cy={38}
               >
              
              </Circle>

              
          </ClipPath>
         <Image
            href={require('./assets/mobile_bg_new_1.fw.png')}
            height={height+50} 
            width={width}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
         
        </Animated.View>

        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN </Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#2E71DC',
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }]
            }}
          >
          <TouchableOpacity onPress={this._signIn}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
             LOGIN WITH GOOGLE
            </Text>
            </TouchableOpacity>
          </Animated.View>

          
          <Animated.View style={{
            zIndex:this.textInputZindex,
            opacity:this.textInputOpacity,
            transform:[{translateY:this.textInputY}],
            height:height/3,
            marginTop:5,
            backgroundColor:'#49A73D',
            ...StyleSheet.absoluteFill, 
            top:null,
            justifyContent:'center'}}>

            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text style={{fontSize:15, fontWeight:'900', 
                  transform:[{ rotate:concat(this.rotateCross,'deg')}]}}>X</Animated.Text>
              </Animated.View>
            </TapGestureHandler>


                  <TextInput
                  placeholder="Email"
                   style={styles.textInput}
                   placeholderTextColor="black"
                  />

                  <TextInput
                  placeholder="Password" 
                   style={styles.textInput}
                   placeholderTextColor="black"
                  />


                  <Animated.View style={styles.button} >
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                      LOGIN
                    </Text>
                  
                  </Animated.View>
          </Animated.View>


        </View>
      </View>
   );
  }
}
export default LoginAnimate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 60,
    marginHorizontal: 40,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
  ,
  textInput:{
    height:50,
    borderRadius:25,
    borderWidth:0.5,
    marginHorizontal:30,
    paddingLeft:20,
    marginVertical:5,
    backgroundColor:'#fff',
    borderColor:'rgba(0,0,0,0.2)'
  },
  closeButton: {
    height:45, width:45,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:-60,
    left:width /2-20,
    shadowColor: "#0000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,

    elevation: 5,
  },

   Logo: {
    height:40, width:40,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    
    left:width /2-20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});