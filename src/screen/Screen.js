import React from "react";
import { View, StatusBar,Text,ImageBackground,StyleSheet, Image,TouchableOpacity } from "react-native";
import HomeScreen_HB from './HomeScreen_HB';
import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Row, Grid } from "react-native-easy-grid";
 import Analytics from 'appcenter-analytics';

 import firebase from '@react-native-firebase/app'
 import analytics from '@react-native-firebase/analytics';
 import RNUxcam from 'react-native-ux-cam';



export default  Screen = ({ name }) =>
{
 

  

     const emails = [
                    "dele.amed@hbng.com",
                     "usman.bello@hbng.com", 
                     "anthony.enoch@hbng.com", 
                     "allwell.brown@hbng.com", 
                     "owolabi.gbenga@hbng.com", 
                     "victoria.zara@hbng.com", 
                     "chima.okeke@hbng.com",
                     'ebuka.okafor@hbng.com',
                     'ademola.michael@hbng.com',
                     'seyi.okafor@hbng.com',
                     'godwin.binfa@hbng.com',
                     'maduka.dante@hbng.com',
                     'kate.brown@hbng.com',
                     'seth.williams@hbng.com',
                     'ifioma.ulaku@hbng.com',
                     'maggi.mustapha@hbng.com',
                     'gambo.musa@hbng.com',
                     'ijeoma.alabi@hbng.com',
                     'masara.olamide@hbng.com',
                     'effion.iduak@hbng.com',
                     'olufemi.isreal@hbng.com',];

    const random = Math.floor(Math.random() * emails.length);
    RNUxcam.setUserProperty("email", emails[random]);

    if(name =='HomeHB')
    {

       analytics().logScreenView({ screen_name: 'Home Screen'});
        
       RNUxcam.tagScreenName("Home Screen");
       
    //console.log(random, emails[random]);

        return(
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>

        <ImageBackground
      style={[{width:100+'%', height:100+'%',marginTop:0, 
      borderWidth:0,
      paddingHorizontal:20 ,
      borderColor:'red', }]}
      source={ require('../assets/mobile_bg_new_hb_light.fw.png')}>

      <View 
          style={{
            flexDirection:'row',
          justifyContent:'space-evenly',
          }}>

      <View style={{width:80+'%',paddingTop:15, paddingBottom:10, borderBottomColor:'#ccc',borderBottomWidth:1}}>
             <Text style={{fontSize:14,color:'#7ED957',fontWeight:'900'}}>{emails[random].split('@')[0]} - ACTIVE</Text>
      </View>

      <TouchableOpacity 
          onPress={
            async()=>{

              alert('Logged LogOut')

                   

                    await  Analytics.trackEvent('LogOut',{email: emails[random]});

                    await analytics().logEvent("LogOut", {email: emails[random] });

                    await firebase.analytics().logEvent('LogOut');

                     await analytics().logSelectContent({ content_type: 'LogOut', item_id: emails[random], })
                     RNUxcam.logEvent("LogOut", {email: emails[random],alias:emails[random].split('@')[0] });

            }
          }
      
      style={{alignItems:"flex-start",borderWidth:0,marginTop:15, borderColor:'red',flexDirection:'row',}} >
          <Icon name="logout" size={13} color="#7ED957" style={{alignItems:"flex-start",paddingRight:7,marginTop:3}} />
          <Text style={{fontSize:12, fontWeight:'900',color:'#7ED957',alignItems:"flex-end",}}>LogOut</Text>

      </TouchableOpacity>
          
       
      
      </View>

      

     

      <View>
            <Text style={{fontSize:20, fontWeight:'900',marginTop:2,marginBottom:10}}>₦ * * * *</Text>
      </View>

      <View style={{
          backgroundColor:'#000',
       width:100+'%',
      padding:8,
      
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginBottom:10
    }}>

           <View style={{alignItems:"flex-start",width:80+'%',borderWidth:0, borderColor:'red'}}>
            <Text style={{fontSize:11, fontWeight:'900',color:'#fff'}}>Ledger balance: Hidden</Text>
           </View> 

          
                <TouchableOpacity onPress={async ()=>
                {
                    alert('Logged Ledger Balance History')

                    RNUxcam.logEvent("Ledger Balance History");

                    await  Analytics.trackEvent('Ledger Balance History',{email: emails[random]});

                    await analytics().logEvent("Ledger Balance History", {email: emails[random] });

                    await firebase.analytics().logEvent('Ledger Balance History');
                    analytics().logScreenView({ screen_name: 'Ledger Balance History'});


                     await analytics().logSelectContent({
                                        content_type: 'Ledger Balance History',
                                        item_id: emails[random],
                                      })
                     RNUxcam.logEvent("Ledger Balance History", {email: emails[random],alias:emails[random].split('@')[0] });

                }}  style={{alignItems:"flex-start",borderWidth:0, borderColor:'red',flexDirection:'row',}}>
                <Icon name="calendar" size={13} color="#FFF" style={{alignItems:"flex-start",paddingRight:7}} />
                <Text style={{fontSize:11, fontWeight:'900',color:'#fff',alignItems:"flex-end",}}>History</Text>
                </TouchableOpacity>
            
            
      </View>



     

      <Text style={{fontSize:14,fontWeight:'900',color:'#rgb(15, 157, 88)',marginTop:6}}>eaZyLinks</Text>
      <View style={{ 
            width:100+'%',            
            flex: 1,
            height: 'auto',
           
           
        }}>
         

         <Grid style={{ borderWidth:0,borderColor:'red',justifyContent:'center',alignContent:'center',alignItems:'center'
           }}>
           
         <Row>

         <Col>
         <TouchableOpacity style={styles.cardShadow}  onPress={ async ()=>
                {
                    alert('Logged QR Payments')

                    RNUxcam.logEvent("Logged QR Payments");

                    await  Analytics.trackEvent('QR Payments',{email: emails[random]});
                     await analytics().logEvent("QR Payments", {"email": emails[random]});
                     await firebase.analytics().logEvent('QR Payments');

                     await analytics().logSelectContent({
                                        content_type: 'QR Payments',
                                        item_id: emails[random],
                                      })

                     RNUxcam.logEvent("QR Payments", {email: emails[random],alias:emails[random].split('@')[0] });

                }} >
         <Image source={ require('./../assets/1.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>QR Payments</Text>
                </TouchableOpacity>
            </Col>
            <Col>
             <TouchableOpacity style={styles.cardShadow} onPress={async()=>
                {
                    alert('Logged Travel & Leisure')
                     await Analytics.trackEvent('Travel & Leisure',{email: emails[random]});
                     await analytics().logEvent("Travel & Leisure", {"email": emails[random]});

                      await analytics().logSelectContent({
                                        content_type: 'Travel & Leisure',
                                        item_id: emails[random],
                                      })

                    RNUxcam.logEvent("Travel & Leisure", {email: emails[random],alias:emails[random].split('@')[0] });

                }} >
             <Image source={ require('./../assets/2.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>Travel & Leisure</Text>
                </TouchableOpacity>
            </Col>

             <Col>
             <TouchableOpacity style={styles.cardShadow} onPress={async()=>
                {
                    alert('Logged Airlines')
                     await Analytics.trackEvent('Airlines',{email: emails[random]});
                     await analytics().logEvent("Airlines", {"email": emails[random]});

                     

                      await analytics().logSelectContent({
                                        content_type: 'Airlines',
                                        item_id: emails[random],
                                      })

                      RNUxcam.logEvent("Airlines", {email: emails[random],alias:emails[random].split('@')[0] });

                }} >
              <Image source={ require('./../assets/3.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>Airlines</Text>
                </TouchableOpacity>
            </Col>

             <Col>
              <TouchableOpacity style={styles.cardShadow}  onPress={async ()=>
                {
                    alert('Logged Cable TV')
                    await  Analytics.trackEvent('Cable TV',{email: emails[random]});
                    await analytics().logEvent("Cable TV", {"email": emails[random]});

                    RNUxcam.logEvent("Cable TV", {email: emails[random],alias:emails[random].split('@')[0] });

                }}>
              <Image source={ require('./../assets/4.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>Cable TV</Text>
                </TouchableOpacity>
            </Col>
         
         </Row>

          <Row>

           <Col >
            <TouchableOpacity style={styles.cardShadow} onPress={ async ()=>
                {
                    alert('Logged myBVN')
                     await Analytics.trackEvent('myBVN',{email: emails[random]});
                   await analytics().logEvent("myBVN", {"email": emails[random]});
                   RNUxcam.logEvent("myBVN", {email: emails[random],alias:emails[random].split('@')[0] });

                }}>
              <Image source={ require('./../assets/5.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:8,marginTop:4}}>myBVN</Text>
                </TouchableOpacity>
            </Col>
             <Col >
             <TouchableOpacity style={styles.cardShadow} onPress={ async ()=>
                {
                    alert('Logged Cable TV')
                     await Analytics.trackEvent('Cable TV',{email: emails[random]});
                    await analytics().logEvent("Cable TV", {"email": emails[random]});

                }}>
              <Image source={ require('./../assets/6.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:8,marginTop:4}}>Cable TV</Text>
                </TouchableOpacity>
            </Col>

             <Col  >
              <TouchableOpacity style={styles.cardShadow} onPress={async ()=>
                {
                    alert('Logged Scheduled Payments')
                    await  Analytics.trackEvent('Scheduled Payments',{email: emails[random]});
                      await analytics().logEvent("Scheduled Payments", {"email": emails[random]});
                      RNUxcam.logEvent("Scheduled Payments", {email: emails[random],alias:emails[random].split('@')[0] });

                }}>
              <Image source={ require('./../assets/7.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>Scheduled Payments</Text>
                </TouchableOpacity>
            </Col>

             <Col >
             <TouchableOpacity  style={styles.cardShadow} onPress={async ()=>
                {
                    alert('Logged Customize eaZylinks')
                     await Analytics.trackEvent('Customize eaZylinks',{email: emails[random]});
                     await analytics().logEvent("Customize eaZylinks", {"email": emails[random]});
                     RNUxcam.logEvent("Customize eaZylinks", {email: emails[random],alias:emails[random].split('@')[0] });

                }}>
              <Image source={ require('./../assets/8.fw.png')} style={{width:25, height:25}} />
                <Text style={{fontSize:8,marginLeft:10,marginTop:4}}>Customize eaZylinks</Text>
                </TouchableOpacity>
            </Col>
         
         </Row>
            

            
        </Grid>


        

        
       
      
      
      
      </View>
     



      <Text style={{fontSize:14,fontWeight:'900',color:'#rgb(15, 157, 88)'}}>Heritage News</Text>
      <HomeScreen_HB email={ emails[random]}/>
      

      
      
      
      </ImageBackground>
       
    </View>
);


    }
    else if(name=='Airtime')
    {
         Analytics.trackEvent('Airtime',{email: emails[random]});
         analytics().logScreenView({ screen_name: 'Airtime'});
         RNUxcam.logEvent("Home Screen", {email: emails[random],alias:emails[random].split('@')[0] });
         
         // firebase.analytics().logEvent("Airtime", {"email": emails[random]});

        return(
                    <View style={{ flex: 1, backgroundColor: "#ccc" }}>

                        <ImageBackground
                    style={[{width:100+'%', height:100+'%',marginTop:0, 
                    borderWidth:0,
                    paddingHorizontal:20 ,
                    justifyContent:'center',alignContent:'center',alignItems:'center',
                    borderColor:'red', }]}
                    source={ require('../assets/mobile_bg_new_hb_light.fw.png')}>

                    <Text style={{fontSize:30,color:'#49A73D'}}>{name}</Text>


                    <Image source={require('../assets/a.fw.png')} style={{width:150,height:150}}></Image>


                     <Row style={{width:100+'%', borderWidth:0, borderColor:'green', height:90,marginTop:50}}>

                     <Col >


                    
                        <TouchableOpacity style={{
                            ...styles.button, paddingHorizontal:5, width:80+'%',
                            
                          }} onPress={()=>{

                            alert('Logged - Topup Successfull')
                           Analytics.trackEvent('Airtime',{email: emails[random], mobile:'08067135499', status:'successful'});

                        }}>
                          <Text style={{ fontSize: 9,  }}>Topup  - 08067135499 </Text>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop:5,color:'green' }}>Sucessfull</Text>
                          </TouchableOpacity>
                       


                     
                     </Col>
                     <Col >

                     
                        <TouchableOpacity style={{
                            ...styles.button, paddingHorizontal:5, width:80+'%',
                            
                          }} onPress={()=>{

                            alert('Logged - Topup Failed')
                           Analytics.trackEvent('Airtime',{email: emails[random],mobile:'08032135419',status:'failed'});

                        }}>
                          <Text style={{ fontSize: 9,  }}>Topup  - 08032135419 </Text>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop:5,color:'red' }}>Failed</Text>
                          </TouchableOpacity>
                       
                     
                     </Col>

                     </Row>

           

                    
                    
                    
                    </ImageBackground>
                    
                    </View>
                );

    }

    else if(name=='Transfer')
    {
         Analytics.trackEvent('Transfer',{email: emails[random]});
         analytics().logScreenView({ screen_name: 'Transfer'});
         //firebase.analytics().logEvent("Transfer", {"email": emails[random]});
         RNUxcam.logEvent("Transfer", {email: emails[random],alias:emails[random].split('@')[0] });
         

        return(
                    <View style={{ flex: 1, backgroundColor: "#ccc" }}>

                        <ImageBackground
                    style={[{width:100+'%', height:100+'%',marginTop:0, 
                    borderWidth:0,
                    paddingHorizontal:20 ,
                    justifyContent:'center',alignContent:'center',alignItems:'center',
                    borderColor:'red', }]}
                    source={ require('../assets/mobile_bg_new_hb_light.fw.png')}>

                    <Text style={{fontSize:30,color:'#49A73D'}}>{name}</Text>


                    <Image source={require('../assets/e.fw.png')} style={{width:150,height:150}}></Image>

                    
                    
                     <Row style={{width:100+'%', borderWidth:0, borderColor:'green', height:90,marginTop:50}}>

                     <Col >


                    
                        <TouchableOpacity style={{
                            ...styles.button, paddingHorizontal:5, width:80+'%',
                            
                          }} onPress={()=>{

                            alert('Transfer - Transfer Successfull')
                           Analytics.trackEvent('Transfer',{email: emails[random], mobile:'0018665348', amount:'1000', status:'Sucessfull'});

                        }}>
                          <Text style={{ fontSize: 9, marginLeft:25 }}>Transfer  1,000 to  0018665348 </Text>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop:5,color:'green' }}>Sucessfull</Text>
                          </TouchableOpacity>
                       


                     
                     </Col>
                     <Col >

                     
                        <TouchableOpacity style={{
                            ...styles.button, paddingHorizontal:5, width:80+'%',
                            
                          }} onPress={()=>{

                            alert('Transfer - Transfer Failed')
                           Analytics.trackEvent('Transfer',{email: emails[random],account:'0035465328', amount:'1000',status:'failed'});

                        }}>
                          <Text style={{ fontSize: 9,marginLeft:25   }}>Transfer  1,000 to  0035465328 </Text>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop:5,color:'red' }}>Failed</Text>
                          </TouchableOpacity>
                       
                     
                     </Col>

                     </Row>

           
                    
                    
                    </ImageBackground>
                    
                    </View>
                );

    }

    else if(name=='Bills')
    {
         Analytics.trackEvent('Bills',{email: emails[random]});
         analytics().logScreenView({ screen_name: 'Bills', screen_class: 'Bills',});
          RNUxcam.logEvent("Bills", {email: emails[random],alias:emails[random].split('@')[0] });
         // firebase.analytics().logEvent("Bills", {"email": emails[random]});

        return(
                    <View style={{ flex: 1, backgroundColor: "#ccc" }}>

                        <ImageBackground
                    style={[{width:100+'%', height:100+'%',marginTop:0, 
                    borderWidth:0,
                    paddingHorizontal:20 ,
                    justifyContent:'center',alignContent:'center',alignItems:'center',
                    borderColor:'red', }]}
                    source={ require('../assets/mobile_bg_new_hb_light.fw.png')}>

                    <Text style={{fontSize:30,color:'#49A73D'}}>{name}</Text>


                    <Image source={require('../assets/c.fw.png')} style={{width:150,height:150}}></Image>

                    
                    
                    
                    </ImageBackground>
                    
                    </View>
                );

    }
    else{


        return(
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>

        <ImageBackground
      style={[{width:100+'%', height:100+'%',marginTop:0, 
      borderWidth:0,
      paddingHorizontal:20 ,
      borderColor:'red', }]}
      source={ require('../assets/mobile_bg_new_hb_light.fw.png')}>

       <Text style={{fontSize:40,color:'red'}}>{name}</Text>

      
      
      
      </ImageBackground>
       
    </View>
);
    }
    
} 



const styles = StyleSheet.create({
    cardShadow: {
       
        backgroundColor: '#fff',

        width:65,height:65,paddingBottom:5,
        margin:5,
        justifyContent:'center',alignContent:'center',alignItems:'center',
        borderWidth:0, borderColor:'green', borderRadius:10,
        shadowColor: "#000",padding:7, justifyContent:'center',alignItems:'center',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
     
    },

    button: {
        backgroundColor: 'white',
       padding:7, 
        paddingBottom:10,
        paddingTop:10,
        marginHorizontal: 5,
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

})