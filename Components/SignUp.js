import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TextInput, Button, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState, useEffect } from "react";
import Fonts from '../assets/Fonts';
import back from '../assets/bag.jpg'
import Color from '../assets/Color';


const SignUp = ({navigation}) =>{

    const [username, setUsername] = React.useState(''); //holds username
    const [password, setPassword] = React.useState(''); //holds password
    const [name, setname] = useState("");
    const [passTwo, setPassTwo] = useState('');
    const [email, setemail] = useState('');
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return (

        
        <ImageBackground source={back} resizeMode="" style={{width:windowWidth, height:windowHeight, opacity:1}} > 
        
               
            
            <Text style={styles.text}>UrbanU©</Text>
            
            <ScrollView >
            <View style={styles.textInputContainer}>
            <TextInput
                        placeholder="Name"
                        onChangeText={(name) => setname(name.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        autoCapitalize='none'
                        style={styles.textInput}
                        selectionColor="#1A374D"
                    />
            <TextInput
                        placeholder="Username"
                        onChangeText={(user) => setUsername(user.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        autoCapitalize='none'
                        style={styles.textInput}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={(email) => setemail(email.trim())}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass1) => setpass(pass1.trim())}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Retype Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass2) => setPassTwo(pass2.trim())}
                        selectionColor="#1A374D"
            />

                <View>   
                    <View style={styles.formBottoms}>
                        <TouchableOpacity style={styles.signup} onPress={""}> 
                            <Text>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.signupView}>
                <Text style={styles.note}>have an account?</Text>
                <TouchableOpacity style={styles.login} onPress={()=> navigation.pop()}> 
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        
            </ImageBackground>
    
);
}

export default SignUp;

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
        marginTop: 80
    },
    formBottoms: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: 25
    },
    login: {
        backgroundColor:Color.puple,
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
        backgroundColor:Color.blue2,
        padding:10,
        borderRadius:13,
        marginTop: 10,
        width: 80,
        alignItems: "center"

    }

});
