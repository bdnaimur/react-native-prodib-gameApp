import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <View>{name='John Doe'}</View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})