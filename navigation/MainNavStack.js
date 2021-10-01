import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../screens/Welcome'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import userActions from "../redux/actions/usersActions"
import { connect } from "react-redux"

const Stack = createNativeStackNavigator()

const Navigator = () => {

    useEffect(()=>{
        const storage= async()=>{
            let token = await AsyncStorage.getItem("token")
            if(token){
                props.signInLS(token)
            }
            }
            storage()
        }, [])

    return (
        <Stack.Navigator >
            <Stack.Screen name="welcome"
                component={Welcome} options={{
                title: 'WOLCOME',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Stack.Screen name="cities" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#0b3f78'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Stack.Screen name="signup" component={SignUp}/>
            <Stack.Screen name="signin" component={SignIn}/>
            <Stack.Screen name="city" component={City}/>
        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        token: state.users.token
    }
}

    const mapDispatchToProps = {
        signInLS: userActions.signInLS
}


export default connect(mapStateToProps , mapDispatchToProps)(Navigator)

