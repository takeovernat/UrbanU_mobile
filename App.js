import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Components/SignIn';



export default function App() {
  const [isSignedIn, useIsSignedIn] = useState(false);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
    
    {
    isSignedIn ? (
     <>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
     </>
    ) : (
    <>
    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
    <Stack.Screen name="SignUp" component={""} />
    </>

  )
  }


    </Stack.Navigator>
    </NavigationContainer>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
