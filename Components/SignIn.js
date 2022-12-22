import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TextInput, Button, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState, useEffect } from "react";
import Fonts from '../assets/Fonts';
import back from '../assets/bag.jpg'
import Color from '../assets/Color';


const SignIn = () =>{

    const [username, setUsername] = React.useState(''); //holds username
    const [password, setPassword] = React.useState(''); //holds password
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return (

        
        <ImageBackground source={back} resizeMode="" style={{width:windowWidth, height:windowHeight, opacity:1}} > 
        
               
            
            <Text style={styles.text}>UrbanU©</Text>
            
            <ScrollView >
            <View style={styles.textInputContainer}>
                <TextInput
                    //value={username}
                    placeholder = 'Username'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(user) => setUsername(user.trim())}
                    selectionColor="white"
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(pass) => setPassword(pass.trim()) }
                    selectionColor="white"
                />

                <View>   
                    <View style={styles.formBottoms}>
                        <TouchableOpacity style={styles.login} onPress={""}> 
                            <Text>Login</Text>
                        </TouchableOpacity>
                             
                        <TouchableOpacity style={styles.forgot}   onPress={""}> 
                        <Text>Forgot password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.signupView}>
                <Text style={styles.note}>Don't have an account?</Text>
                <TouchableOpacity style={styles.signup}  title="Sign Up"> 
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        
            </ImageBackground>
    
);
}

export default SignIn;

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: 'rgba(51,64,83,255)',
        paddingBottom: 40,
        height: Dimensions.get('window').height
    },
    text:{
        
        fontFamily: Fonts.primary,
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 90,
        marginTop:50,
        color: "white",
        alignSelf: "center" 
    },
    textInput: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(71, 122, 151, .5)',
        color: 'white',
        marginTop: '2%',
        padding: 15,
        width: '75%',
        backgroundColor:Color.blue2
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: 160
    },
    formBottoms: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: 25
    },
    login: {
        backgroundColor:Color.blue2,
        padding:10,
        borderRadius:13,
        marginTop: 30,
        width: 80,
        alignItems: "center",
        
    },
    forgot:{
        backgroundColor:Color.blue,
        padding:10,
        borderRadius:13,
        marginTop: 5,
        width: 130,
        height: 37,
        alignItems: "center"
    },
    note:{
        fontFamily: Fonts.primary,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color:"white",
    },
    signupView: {
        alignItems: 'center',
        marginTop: "20%",
    },
    signup:{
        backgroundColor:Color.puple,
        padding:10,
        borderRadius:13,
        marginTop: 10,
        width: 80,
        alignItems: "center"

    }

});
