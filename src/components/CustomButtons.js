import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CustomButtons({label, icon, style, navigateTo}) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate(`${navigateTo}`)}
    style={style}>
        <Text style={{
            color: '#fff',
            fontSize: 18, 
            fontWeight: 'bold',
            textAlign: 'center'
        }}>{label}</Text>
        {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})