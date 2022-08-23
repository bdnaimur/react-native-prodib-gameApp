import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Registration from '../svg/registration.svg'
import GoogleSvg from '../svg/GoogleSvg';
import FacebookSvg from '../svg/FacebookSvg';
import TwitterSvg from '../svg/TwitterSvg';
import InputField from '../components/InputField';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

import CustomButtons from '../components/CustomButtons'

export default function Register() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <ScrollView>
        <View style={{
          alignItems: 'center'
        }}>
            <Registration
              height={300}
              width={300}
              style={{
                transform: [{rotate: '-5deg'}]
              }}
            />
        </View>
        <View style={{
          paddingHorizontal: 20
        }}>
          <Text style={{
            fontSize: 24,
            color: '#333',
            fontWeight: 'bold'
          }}>Register</Text>
        </View>
        <View
                style={{

                    flexDirection: 'row',
                    marginTop: 30,
                    paddingHorizontal: 20,
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: '#999',
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    borderRadius: 10
                }}>
                <GoogleSvg
                    height= {30}
                    width= {30}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: '#999',
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    borderRadius: 10
                }}>
                <FacebookSvg
                    height= {30}
                    width= {30}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: '#999',
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    borderRadius: 10
                }}>
                <TwitterSvg
                    height= {30}
                    width= {30}
                />
                </TouchableOpacity>
            </View>
            <Text style={{
              color: '#666',
              margin: 20,
              textAlign: 'center'
            }}>Or, register with details ...</Text>
            <View style={{
              paddingHorizontal: 20
            }}>
              <InputField 
                label='Full Name'
                icon={<Ionicons name="md-person-outline" size={24} color="#666" style={{marginRight:5}} />}
              />
              <InputField 
                label='Email'
                icon = {<MaterialIcons name="alternate-email" size={24} color="#666" style={{marginRight:5}} />}
                />
              <InputField 
                label='Password'
                icon={<Feather name="lock" size={24} color="#666" style={{marginRight:5}} />}
              />
              <InputField 
                label='Confirm Password'
                icon={<Feather name="lock" size={24} color="#666" style={{marginRight:5}} />}
              />
              <InputField 
                label='Date of Birth'
                icon={<MaterialIcons name="date-range" size={24} color="#666" style={{marginRight:5}} />}
              />
            </View>
            <View style={{
              alignItems: 'center'
            }}>
              <CustomButtons
              navigateTo='Login'
              style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  padding: 20,
                  marginBottom: 50,
                  backgroundColor: '#AD40AF',
                  borderRadius: 10,
                  // textAlign: 'center'
              }}
              label='Register'

              />
            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})