import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Gaming from '../svg/Gaming'
import { AntDesign } from '@expo/vector-icons';
import CustomButtons from '../components/CustomButtons';

export default function OnBoarding({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'

        }}>
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: '#20315f'
                }}>GAMEON</Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Gaming
                    width={300}
                    height={300}
                    style={{ transform: [{ rotate: '-15deg' }] }}
                />
            </View>
            <CustomButtons
                navigateTo='Login'
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 300,
                    padding: 20,
                    marginBottom: 50,
                    backgroundColor: '#AD40AF',
                    borderRadius: 10
                }}
                label='Login'
                icon={<AntDesign name="right" size={24} color="#fff" />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})