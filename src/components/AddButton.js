import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated,LogBox, Text  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationActions, DrawerActions} from 'react-navigation';

export default class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);


    navigateToScreen = ( route ) =>(
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        });

    componentDidMount()
    {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.75,
                duration: 150, 
                
                
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();
    };

    render() {
        const thermometerX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        });

        const thermometerY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const timeX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        });

        const timeY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -150]
        });

        const pulseX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        });

        const pulseY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        });

        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>

               
                    <View style={styles.secondaryButton}>
                        
                         <TouchableOpacity onPress={()=>{
                            
                             this.navigateToScreen('HomeHBScreen')
                             
                         }}>
                            <Icon name="creditcard" size={20} color="#FFF" />
                         </TouchableOpacity>
                    </View>
                    <View style={{marginTop:50}}>
                        <Text style={{fontSize:10,paddingLeft:3}}>My Card</Text>
                    </View>

                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View style={styles.secondaryButton}>
                        <Icon name="message1" size={20} color="#FFF" />
                    </View>
                    <View style={{marginTop:50}}>
                        <Text style={{fontSize:10,paddingLeft:10}}>Chat</Text>
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                        <Icon name="tool" size={20} color="#FFF" />
                    </View>
                     <View style={{marginTop:50}}>
                        <Text style={{fontSize:10,paddingLeft:5}}>Setting</Text>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle,{
                                                                    shadowColor: "#000",
                                                                    shadowOffset: {
                                                                    width: 0,
                                                                    height: 2,
                                                                    },
                                                                    shadowOpacity: 0.25,
                                                                    shadowRadius: 3.84,
                                                                    elevation: 5,

                                                                            }]}>
                    <TouchableHighlight onPress={this.handlePress} underlayColor="#49A73D">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <Icon name="plus" size={24} color="#FFF" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#49A73D",
        position: "absolute",
        marginTop: -50,
        shadowColor: "#49A73D",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        //marginTop: 10,
        borderRadius: 24,
        backgroundColor: "#49A73D",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});