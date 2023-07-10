import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import BottomNavigator from '../screen/BottomNavigator';

const Page = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <BottomNavigator />
    </SafeAreaView>
  );
};
export default Page;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#F7F8FA',
  },
});
