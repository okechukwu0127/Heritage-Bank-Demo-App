
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ActivityIndicator,
    ImageBackground
  } from 'react-native';

import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from '../assets/loading-blur.png';
import Analytics from 'appcenter-analytics';
//import firebase from 'react-native-firebase';
//import setting from '../../config'

//import { fetchPushFeedAPI } from "./../store/actions/PushFeedActions";
//import {connect} from 'react-redux';

const { width } = Dimensions.get('window');








class SwipeableCarousel extends Component {

    
    constructor(props) {
      //alert(JSON.stringify(props))
        super(props);
        this.state={
          isFetchingPush:false,
          email:props.email,
          
          PushFeedData:[
            {
                "push_id": 61,
                "push_title": "Heritage responds to COVID-19",
                "push_summary": "With the COVID-19 situation continuing to evolve in Australia, Heritage Bank has reacted quickly to put in place measures to protect the health of our staff and our members, and to maintain the vital services we provide. ",
                "push_image": "https://i0.wp.com/techgraph.co/wp-content/uploads/2020/03/corona-virus.jpg?fit=720%2C405&ssl=1",
                "created_at": "2020-11-05 18:49:27",
                "updated_at": "2020-11-05 18:49:27"
                },
              {
                "push_id": 61,
                "push_title": "Heritage Bank offers tech start-ups over $40,000 grants",
                "push_summary": "Heritage Bank Plc has doled out more than $40,000 grants to winners of the maiden edition of its HB Innovation Lab Accelerator programme (HB-LAB), as part of its efforts to support Nigeria’s aspiration and roadmap to becoming a leading Information Communication Technology (ICT) Hub in Africa.",
                "push_image": "https://brandspurng.com/wp-content/uploads/2019/05/HERITAGE-BANK-DOLES-OUT-40000-GRANTS-TO-%E2%80%98HB-LAB%E2%80%99-TECH-START-UPS%E2%80%99-WINNERS-brandspur-nigeria3.jpg",
                "created_at": "2020-11-05 18:49:27",
                "updated_at": "2020-11-05 18:49:27"
                },
                {
                "push_id": 60,
                "push_title": "Heritage Bank upgrades HB ‘Padie’ Mobile App",
                "push_summary": "Heritage Bank Plc has upgraded its HB ‘Padie’ mobile application to HB ‘Padie’ 2.0, which comes with new improved features for convenient, quick, secure and affordable way for seamless 24/7 banking transaction",
                "push_image": "https://i0.wp.com/www.vanguardngr.com/wp-content/uploads/2017/08/Heritage-Bank.png?w=412&ssl=1",
                "created_at": "2020-07-27 16:01:57",
                "updated_at": "2020-07-27 16:01:57"
                },
                {
                "push_id": 59,
                "push_title": "Heritage teams with Experian to improve loans process for borrowers",
                "push_summary": "This way you can easily calculate total profits and/or loss resulting from the challenge, more accurately!!",
                "push_image": "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/06/26/Photos/Processed/personal-loan.jpg",
                "created_at": "2020-07-19 11:55:31",
                "updated_at": "2020-07-19 11:55:31"
                },
                {
                "push_id": 58,
                "push_title": "Heritage Bank-Dukia Gold to boost Nigeria’s N200m",
                "push_summary": "The Federal Government of Nigeria has commended Heritage Bank for being part of a valuable private sector collaboration with Dukia Gold & Precious Metals Refining Co. Ltd, saying such partnership stands to create new opportunities for Nigeria to grow its potential reserves of 200 million ounces of gold",
                "push_image": "https://i0.wp.com/www.vanguardngr.com/wp-content/uploads/2020/06/Heritage-bank-1.jpg?w=600&ssl=1",
                "created_at": "2020-07-18 13:21:04",
                "updated_at": "2020-07-18 13:21:04"
                },
                {
                "push_id": 57,
                "push_title": "Osinbajo to commission Dukia – Heritage bank gold",
                "push_summary": "Vice-President, Yemi Osinbajo and the Honourable Minister of Mines and Steel Development, Arc. Olamilekan Adegbite, will on Tuesday 9th of June 2020, officially launch the commencement of the Dukia Gold & Precious Metals Raw Materials Buying Program of Nigeria’s first gold and precious metals refining company",
                "push_image": "https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2019/12/osinbajo.jpg?w=600&ssl=1",
                "created_at": "2020-07-18 10:47:42",
                "updated_at": "2020-07-18 10:47:42"
                },
                {
                "push_id": 56,
                "push_title": "SMEs must reinvent to remain competitive",
                "push_summary": "Managing Director/Chief Executive, Heritage Bank Limited, Mr. Ifie Sekibo, has advised Small and Medium Enterprises (SMEs) to reinvent themselves in order to remain competitive and overcome the challenges of the COVID-19 pandemic. Speaking on “Converting ideas into reality with focus on SME’s”, Sekibo also stressed the need for SMEs to continually embrace partnership and function",
                "push_image": "https://i2.wp.com/www.vanguardngr.com/wp-content/uploads/2020/05/7c17dcb5-ifie-sekibo.jpg",
                "created_at": "2020-07-17 22:45:29",
                "updated_at": "2020-07-17 22:45:29"
                }
            ]
          

        }
 
    }

    

    componentDidMount()
    {

      
        
    }



    renderItem = ({ item, index }) => {

        const { push_image,created_at,push_id, push_title, push_summary } = item;
      //  alert(index)

        

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}
            onPress={()=>
                {
                    alert('Logged New  - '+ push_title);
                    
                     Analytics.trackEvent('News',{email: this.state.email,news:push_title});
                     //firebase.analytics().logEvent("Ledger News", {"email": push_title});

                }} 
          >
            <ImageBackground
              source={{ uri:push_image }}
              style={styles.imageBackground}
              //loadingIndicatorSource={loadingBlurImage}
            >
              <View style={styles.rightTextContainer}>
                <Text style={styles.rightText}>News</Text>
              </View>
            </ImageBackground>

            <View style={styles.lowerContainer}>

              <Text style={styles.titleText}>{
                ((push_title.length > 38)
                ?push_title.substring(0, 40).toUpperCase()+'...'
                :push_title.toUpperCase()
                )}
              </Text>

              <Text style={styles.contentText}>{ ' '}
               </Text>
            </View>
          </TouchableOpacity>
        );
      };

    render()
    {

      const { isFetchingPush,PushFeedData } = this.state
      //alert(JSON.stringify(PushFeedData))

        return(
           
         /*  <View style={{width:100+'%',alignItems:'center', padding:10}}>{ */
             (
               (isFetchingPush)
               ?<View style={{width:100+'%',alignItems:'center', padding:10,backgroundColor:'transparent'}}>
               <ActivityIndicator size = "small" />
               </View>
                    :<Carousel style={styles.carousel}
                    data={PushFeedData}
                   renderItem={this.renderItem}
                    itemWidth={0.57 * width}
                    inActiveOpacity={0.1}
                    containerWidth={width - 10}
                    ref={(c) => {
                      // this.numberCarousel = c; 
                        }}
                    />
              )

          /*  }
           </View> */
        
         
        )
    }


}


export default SwipeableCarousel



const styles = StyleSheet.create({
    carousel: {
      flex: 1,
      backgroundColor: 'transparent',
     
    },
    item: {
      borderWidth: 2,
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      borderColor: 'white',
      
       width:200,
       shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    imageBackground: {
      flex: 2,
      //backgroundColor: '#EBEBEB',
      borderWidth: 5,
     
      borderColor: 'white'
    },
    rightTextContainer: {
      marginLeft: 'auto',
      marginRight: -2,
      backgroundColor: 'rgba(49, 49, 51,0.5)',
      padding: 3,
      marginTop: 3,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
    },
    rightText: { color: 'white' },

    lowerContainer: {
      flex: 1,
      margin: 10,
      
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 13
    },
    contentText: {
      marginTop: 10,
      fontSize:2
    }
  });