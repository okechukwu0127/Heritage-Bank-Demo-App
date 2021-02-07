import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,StatusBar,TouchableOpacity,
  } from 'react-native';

import codePush from "react-native-code-push";
import LinearGradient from 'react-native-linear-gradient';





/*
* Store - holds our state  - THERE IS ONLY ONE STATE
* Action - State can be  modified using actions  - SIMPLE OBJECTS
* Dispatcher - Action need  to be sent  by someone - Known as dispatching an action
* Reducer - recieves the  action and  modifies  the state to give  us a new  state
* - pure function
* - only mandatory argument is the 'type'
*  Subscribe -  listens  for state change to  update the  UI
*/

 class CodePushScreen extends Component{

    constructor(props) 
    {

        //alert(JSON.stringify(props))
        super(props);
        this.state = { 
          restartAllowed: true,
          pushDone:false,
         // syncMessage :'Loading AI'
         };

    }

    componentDidMount()
    {
        // this.props.navigation.navigate('Logins')
        this.sync();}


    codePushStatusDidChange(syncStatus) {
        switch(syncStatus) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:

            this.setState({ syncMessage: "Checking OctoPlus updates" });
            console.log('Checking OctoPlus updates')
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            this.setState({ syncMessage: "Downloading OctoPlus update packages" });
             console.log('Downloading OctoPlus update packages')
            break;
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            this.setState({ syncMessage: "Awaiting user action" });
             console.log('Awaiting user action')
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            this.setState({ syncMessage: "Installing OctoPlus update" });
            console.log('Installing OctoPlus update')
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            this.setState({ syncMessage: "App OctoPlus up to date", progress: false });
             console.log('App OctoPlus up to date')
            break;
          case codePush.SyncStatus.UPDATE_IGNORED:
            this.setState({ syncMessage: "Update cancelled by user", progress: false });
             console.log('Update cancelled by user')
            break;
          case codePush.SyncStatus.UPDATE_INSTALLED:
               console.log('Update installed and will be applied on restart')
            this.setState({ syncMessage: "Update installed and will be applied on restart. OctoPlus restarting", progress: false });
            break;
          case codePush.SyncStatus.UNKNOWN_ERROR:
            this.setState({ syncMessage: "Network request failed", progress: false });
            break;
        }
      }


      codePushDownloadDidProgress(progress) {


        this.setState({ progress });
      }


      sync() {
        codePush.sync(
          {},
          this.codePushStatusDidChange.bind(this),
          this.codePushDownloadDidProgress.bind(this)
        );
      }
    
      /** Update pops a confirmation dialog, and then immediately reboots the app */
      syncImmediate() {
        codePush.sync(
          { installMode: codePush.InstallMode.IMMEDIATE, updateDialog: true },
          this.codePushStatusDidChange.bind(this),
          this.codePushDownloadDidProgress.bind(this)
        );
      }



    render() {

        let progressView;

        if (this.state.progress) {
          progressView = (
                <Text style={{fontSize:10,color:'#fff',marginTop:5}}>
                {(this.state.progress.receivedBytes/1025).toFixed(2)} of {(this.state.progress.totalBytes/1025).toFixed(2)} bytes received</Text>
            );
        }

        if (this.state.pushDone) {

            console.log('LoginSingle')
             this.props.navigation.navigate('LoginSingle')

        }


      

     if(this.state.syncMessage =='App OctoPlus up to date' || 
         this.state.syncMessage=='Network request failed' )
         {
              this.props.navigation.navigate('LoginSingle')
              return(null)

         }
         else{

           return  (<View  style={styles.container}>

                <StatusBar
                backgroundColor='#57b952'
                barStyle="light-content"
              />
          
                      <View style={{alignItems:'center',marginVertical:10, justifyContent:'center',
                      borderWidth:0,borderColor:'red', width:100+'%'}}>
                      <Image source={require('./../assets/HB_white.fw.png')} style={{width:135, height:47}}/>
                      <Text style={{color:'white', fontSize: 9, marginTop:10, marginBottom:20}}>
                      The Right Bank Makes A Difference</Text>
                      </View>
          
                    <ActivityIndicator color="#ffffff" size="large" />


                    <View style={{alignItems:'center',marginTop:20,marginVertical:5, justifyContent:'center',
                    borderWidth:0,borderColor:'red', width:100+'%'}}>

                    {progressView}
                    <Text style={{fontSize:10,color:'#fff'}}>{this.state.syncMessage || ""}</Text>


                   

                   
                    
                    </View>


                    
                      
                      
                      
        
                  

                      
                    
                    </View>)

         }
 
        

       
    }


}

let codePushOptions ={
    updateDialog:true,
  /*  updateDialog: {
    appendReleaseDescription: true,
    descriptionPrefix: "\n\nChange log:\n",
    title: "Betbank update available",
    mandatoryUpdateMessage : "An update is available that must be installed. This update makes the app run faster and improves each game accuracy level.",
    mandatoryContinueButtonLabel :"Upgrade Now",

    optionalUpdateMessage :"A fresh update is available for Betbank. Would you like to install it?"


   }, */
    checkFrequency: codePush.CheckFrequency.MANUAL,
   // installMode: codePush.InstallMode.IMMEDIATE,
    mandatoryInstallMode: codePush.InstallMode.IMMEDIATE 

}

export default  App = codePush(codePushOptions)(CodePushScreen)



const styles = StyleSheet.create({
    container : {
      backgroundColor: '#57b952',
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 99,
      justifyContent: "center"
    }
  });

