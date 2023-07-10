import { View, Text, Dimensions,TouchableOpacity, PermissionsAndroid, ScrollView, Button, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import ENT from 'react-native-vector-icons/Entypo'
import { Image } from 'react-native-elements';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import Geolocation from '@react-native-community/geolocation';
const {height, width} = Dimensions.get('window');
const PADDING = 8;



export default function Menu() {
  const [index, setIndex] = useState(0);
  const [location, setLocation] = useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {

        console.log(position);

        const currentLongitude = position.coords.longitude;

        const currentLatitude = position.coords.latitude;

        setCurrentLongitude(currentLongitude);

        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('');

        const currentLongitude = position.coords.longitude;

        const currentLatitude = position.coords.latitude;

        setCurrentLongitude(currentLongitude);

        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };


    const pieData = [
        {value: 54, color: '#33FFBD', text: '54%'},
        {value: 40, color: '#ff3c00', text: '30%'},
        {value: 20, color: '#ffb300', text: '26%'},
    ];

  const data=[ {value:12,label:'Week 1'}, {value:28,label:'Week 2'}, {value:17,label:'Week 3'}, {value:10,label:'Week 4'},{value:15,label:'Week 5',topLabelComponent: () => (
    
    <Text style={{color: 'blue', fontSize: 18,marginBottom:10}}>14%</Text>
  ),} ]



  const renderDot = color => {
    return (
      <View
        style={{
          height: 16,
          width: 16,
          borderRadius: 8,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            alignItems:'center'
          }}>
            {renderDot('#33FFBD')}
            <View>
            <Text style={{color: 'black',fontSize:32,fontWeight:'bold'}}>52.4%  
            </Text>
            <Text>Delivered</Text>
           
            </View>
          </View>
          
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            alignItems:'center'
          }}>
            {renderDot('#ff3c00')}
            <View>
            <Text style={{color: 'black',fontSize:32,fontWeight:'bold'}}>52.4%  
            </Text>
            <Text>Transit</Text>
            </View>
          </View>
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            alignItems:'center'
          }}>
            {renderDot('#ffb300')}
            <View>
            <Text style={{color: 'black',fontSize:32,fontWeight:'bold'}}>52.4%  
            </Text>
            <Text>Others</Text>
            </View>
            
          </View>
      </>
    );
  };
  



  return (
    <ScrollView>
    <><View style={{ alignItems: 'center', backgroundColor: '#D3D3D3', width }}>
          <TouchableOpacity
              style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  position: 'absolute',
                  right: 0,
                  top: 0,
              }}>
              <ENT
                  name={'menu'}
                  size={28}
                  style={{
                      marginTop: 5,
                      color: 'black',
                  }} />
          </TouchableOpacity>
          <Image
              source={require('../assets/profile.png')}
              style={{
                  width: width * 0.2,
                  height: height * 0.2,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  //   backgroundColor:'red'
              }} />
          <View style={{ flexDirection: 'row', position: 'absolute', marginTop: height * 0.15 }}>
              <Text style={{ fontWeight: 600, color: 'black', fontSize: 18 }}>Nehirika Singh </Text>
              <Text style={{ color: '#43abcd', fontSize: 17, alignContent: 'center' }}> 5854664663</Text>
          </View>
          <View style={{ width: 100, height: 100, borderBottomWidth: 3, borderBottomColor: '#43abcd', position: 'absolute', marginTop: height * 0.096 }}>
          </View>
          <View style={{}}>
              <Text style={{ fontSize: 17 }}>Delhi,India</Text>
          </View>
      </View>
      <View style={{}}>

      <View
          style={{
            backgroundColor: '#02a698',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => setIndex(0)}
            style={{
              borderBottomColor: index == 0 ? 'black' : null,
              borderWidth: index == 0 ? 2.5 : null,
              borderTopColor: '#02a698',
              borderLeftColor: '#02a698',
              borderRightColor: '#02a698',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: index == 0 ? 'black' : '#d0d0d0',
              }}>
              Insight
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIndex(1)}
            style={{
              borderBottomColor: index == 1 ? 'black' : null,
              borderWidth: index == 1 ? 2.5 : null,
              borderTopColor: '#02a698',
              borderLeftColor: '#02a698',
              borderRightColor: '#02a698',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: index == 1 ? 'black' : '#d0d0d0',
              }}>
              Clients
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIndex(2)} style={{
              borderBottomColor: index == 2 ? 'black' : null,
              borderWidth: index == 2 ? 2.5 : null,
              borderTopColor: '#02a698',
              borderLeftColor: '#02a698',
              borderRightColor: '#02a698',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: index == 2 ? 'black' : '#d0d0d0',
              }}>
              Team
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center',backgroundColor:'#FFFF',width:width*0.9,marginTop:height*0.02,height:height*0.27,elevation:10,borderRadius:15,padding:2}}>
            <View style={{padding:5,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:800,fontSize:18,marginRight:width*0.25}}>Demographics</Text>
            <Text>Month</Text>
            <ENT
                  name={'dots-three-horizontal'}
                  size={18}
                  style={{
                      color: 'black',
                  }} />
            </View>
<BarChart data = {data}  maxValue={30} noOfSections={3} 
        frontColor={'#177AD5'} barWidth={45} />
</View>
<View style={{alignSelf:'center',backgroundColor:'#FFFF',width:width*0.9,marginTop:height*0.02,height:height*0.28,elevation:10,padding:5,borderRadius:15}}>
            <View style={{padding:5,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:800,fontSize:18,marginRight:width*0.35}}>Orders</Text>
            <Text>Month</Text>
            <ENT
                  name={'dots-three-horizontal'}
                  size={18}
                  style={{
                      color: 'black',
                  }} />
            </View>
            <View style={{marginTop:height*0.016}}>
            <PieChart
            donut
            radius={110}
            textSize={10}
            data={pieData}
            innerRadius={70}
            innerCircleColor={'white'}
            centerLabelComponent={() => {
                return (
                  
                    <View style={{alignItems:'center'}}><Text
                        style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
                        9,204
                    </Text><Text
                        style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Total Order
                        </Text></View>
                );
              }}
            />
    </View>
    <View style={{position:'absolute',marginTop:height*0.055,marginLeft:width*0.6}}>
{renderLegendComponent()}
    </View>
</View>
<View style={{alignSelf:'center',marginBottom:10}}>
<Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
            fontWeight:700,
            fontSize:16
          }}>
          Longitude = {currentLongitude}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 6,
            fontWeight:700,
            fontSize:16
          }}>
          Latitude = {currentLatitude}
        </Text>
        <Button
              title="Get Location"
              onPress={()=>Linking.openURL(`https://www.google.com/maps/place/${currentLatitude},${currentLongitude}`)}
            />
</View>
          </View></>
          </ScrollView>
  )
}



// onPress={()=>Linking.openURL(`https://www.google.com/maps/place/${items.latitude},${items.longitude}`)}