import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import MessageScreen from '../screens/MessageScreen';

const Drawer = createDrawerNavigator();

export default function AppStack() {

  return (
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})