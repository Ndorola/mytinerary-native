import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from "react-redux";
import userActions from "./redux/actions/usersActions"
import { useEffect } from "react"

const Menu = (props) => {

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
        // <View style={styles.header}>
        //     <Image source={{uri: 'https://i.postimg.cc/L5kWtVzy/logo.png'}} style={styles.logo} />
        // </View>
        <View>
            <TouchableOpacity>
                <View>
                    <Text onPress={() => {
                        props.navigation.navigate('welcome')
                    }}>Welcome</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Text onPress={() => {
                        props.navigation.navigate('cities')
                    }}>Cities</Text>
                </View>
            </TouchableOpacity>
            {!props.token && <TouchableOpacity>
                <View>
                    <Text onPress={() => {
                        props.navigation.navigate('signin')
                    }}>Sign In</Text>
                </View>
            </TouchableOpacity>}
            {!props.token &&  <TouchableOpacity>
                <View>
                    <Text onPress={() => {
                        props.navigation.navigate('signup')
                    }}>Sign Up</Text>
                </View>
            </TouchableOpacity>}
            {props.token &&  <TouchableOpacity>
                <View>
                    <Text onPress={() => {
                        props.navigation.navigate('logout')
                    }}>Log Out</Text>
                </View>
            </TouchableOpacity>}
            {/* {props.token && alert(props.name)} */}
        </View>
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
  
  export default connect(mapStateToProps , mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
    // header: {
    //     width: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#f5f5f5'
    // },
    // logo: {
    //     width: 160,
    //     height: 50,
    //     marginTop: 10,
    //     marginBottom: 30
    // },
})