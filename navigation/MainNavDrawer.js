import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/Welcome'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, Text, Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import userActions from "../redux/actions/usersActions"
import { connect } from "react-redux"
import MainNavStack from './MainNavStack';
import LogOut from '../screens/LogOut';

const Drawer = createDrawerNavigator()

const Navigator = (props) => {

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
                title: 'Welcome',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                headerShown: true,
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="citiesDr" component={Cities} options={{
                title: 'Cities',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            {!props.token && <Drawer.Screen name="signupDr" component={SignUp} options={{
                title: 'Sign Up',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>}
            {!props.token && <Drawer.Screen name="signinDr" component={SignIn} options={{
                title: 'Sign In',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>}
            {props.token && <Drawer.Screen name="logoutDr" component={LogOut} options={{
                title: 'Log Out',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                // headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>}
            <Drawer.Screen name="city" component={City} options={{
                title: 'City',
                headerTintColor: 'orange',
                headerStyle: {
                backgroundColor: 'white'
                },
                headerLeft: () => null,
                headerRight: () => <View>
                <Button onPress={() => props.navigation.goBack()} title="Go back" />
                </View>
            }}/>
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

