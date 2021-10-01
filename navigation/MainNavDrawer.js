import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import MainNavStack from './MainNavStack';

const Drawer = createDrawerNavigator()

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
        <Drawer.Navigator >
            <Drawer.Screen name="welcomeDr"
                component={MainNavStack} options={{
                title: 'WELCOME',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerShown: false,
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="citiesDr" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#0b3f78'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="signupDr" component={SignUp}/>
            && <Drawer.Screen name="signinDr" component={SignIn}/>
            <Drawer.Screen name="cityDr" component={City}/>
        </Drawer.Navigator>

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

