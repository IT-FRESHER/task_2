import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/component/screen/BottomNavigator';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />


       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
