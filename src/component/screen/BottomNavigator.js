/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { View } from 'react-native';
// eslint-disable-next-line no-unused-vars
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import More from './More';
import Offers from './Offers';
import Menu from './Menu';
import IC from 'react-native-vector-icons/Foundation';
import MCI from 'react-native-vector-icons/AntDesign';
import Profile from './Profile'
import Page from './Page';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 105,
          borderTopWidth: 10,
          elevation: 10
        },
        showLabel: true,
        activeTintColor: 'blue'
      }}>
      <Tab.Screen
        name="Task"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="menu" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Page"
        component={More}
         options={{
        //   headerShown: false,
        //   tabBarIcon: ({ color }) => (
        //     <View
        //       style={{
        //         height: 60,
        //         width: 60,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         backgroundColor: COLORS.white,
        //         borderColor: COLORS.primary,
        //         borderWidth: 2,
        //         borderRadius: 30,
        //         top: -45,
        //         elevation: 5
        //       }}
        //       >
        //       <Icon name="home-filled" color={COLORS.primary} size={28} />
        //     </View>
        //   )
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon name="notifications" color={color} size={28} />
        )

         }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MCI name="user" color={color} size={28} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
