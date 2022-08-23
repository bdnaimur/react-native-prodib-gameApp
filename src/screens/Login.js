import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import LoginSvg from '../svg/Login'
import InputField from '../components/InputField'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import CustomButtons from '../components/CustomButtons';
import LoginSvg from '../svg/LoginSvg';
import GoogleSvg from '../svg/GoogleSvg';
import FacebookSvg from '../svg/FacebookSvg';
import TwitterSvg from '../svg/TwitterSvg';

export default function Login({navigation}) {
    return (
        <SafeAreaView style={{
            flex: 1,
            // alignItems: 'center'
            // padding: 20
        }}>
            <View style={{
                // flex: 1,
                // height: 300,
                // width: 300,
                alignItems: 'center',
            }}>
                <LoginSvg
                    width={350}
                    height={300}
                />
            </View>

            <View style={{
                padding: 20,
                // alignItems: 'center'
            }}>
                <View>
                    <Text
                    style={{
                        fontSize: 24, 
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: 30
                        
                    }} 
                    >Login</Text>
                </View>
                <View>
                    <InputField 
                        label={'Email Id'}
                    icon={
                        <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}} />
                    }
                        // inputType,
                        keyboardType='email-address'
                        // fieldButtonLabel,
                        // fieldButtonFunction,
                        style={{flex: 1}}

                    />
                    <InputField 
                        label={'Password'}
                    icon={
                        <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{marginRight: 5}} />
                    }
                        inputType='password'
                        // keyboardType='email-address'
                        fieldButtonLabel={'Forgot?'}
                        // fieldButtonFunction,

                        style={{flex: 1, paddingRight: 5}}
                    />
                </View>
                <CustomButtons
                navigateTo={'OnBoarding'}
                    label = 'Signin'
                    style={{
                        backgroundColor: '#AD40AF',
                        width: 300,
                        padding: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginTop: 20,
                        textAlign: 'center'

                    }}
                />
            </View>
            <View>
                <Text style={{
                    textAlign: 'center',
                    color: '#666'
                }}>Or Login with...</Text>
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
            <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'center'
            }}>
                <Text style={{
                    // textAlign: 'center',
                    color: '#333'
                }}>New to the app? 
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={{
                    color: '#AD40AF'
                }}> Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})