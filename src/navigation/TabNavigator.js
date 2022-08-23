import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})