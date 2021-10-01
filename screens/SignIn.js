import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, StatusBar, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
// import {} from '@expo/vector-icons'

const SignIn = (props) => {

    const [addUser, setAddUser] = useState({
        email: "",
        password: ""
    })

    const [visible, setVisible] = useState(false)

    // const TextInputChange = (e) => {
    //     setAddUser({
    //         ...addUser,
    //         name : e.nativeEvent.text
    //     })
    // }
    // console.log(addUser)

    const submitData = async (e) => {
        e.preventDefault()
        try {
            if (Object.keys(addUser).some((property) => addUser[property] === "")) {
                alert("All fields are required")
                return false
            }
            let response = await props.signIn(addUser)
            if(!response.data.success) {
                // if(response.data.response === 'You create account with Google, please sign in with them') {alert(response.data.response)} 
                if(response.data.response === 'Incorrect email or password') {alert(response.data.response)} 
                } else {
                    setVisible(true)
                }
            }
        catch (error) {
            alert('hubo un problema vuelva mas tarde')
            //api caida
        }
    }

    // const responseGoogle = async (response) => {
    //     let userGoogle = {
    //         email: response.profileObj.email,
    //         password: response.profileObj.googleId,
    //         signInGoogle: true
    //     }
    //     try {
    //         await props.signIn(userGoogle)
    //     } catch (error) {
    //         console.log('Authentication Error')
    //         alert('Authentication Error')
    //     }
    // }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>Sign In</Text>
            <View className="mainForm">
            <View>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View className="formBox">
                        <Text>Welcome back!</Text>
                        <Text>Sign in to discover and connect with MYtinerary's global community</Text>
                        <View>
                            <TextInput
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                onChange={(e) => setAddUser({...addUser, email: e.nativeEvent.text})}
                            />
                        </View>
                        <View>
                            <TextInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setAddUser({...addUser, password: e.nativeEvent.text})}
                                keyboardType= 'numeric'
                            />
                        </View>
                        <TouchableOpacity onPress={() => {console.log('soy el boton')}}>
                            <View className="buttonsForm">
                                <Text className="btnForm" onPress={submitData}>Sign in</Text>
                                {/* <GoogleLogin
                                    className="btnGoogle"
                                    clientId="1089874556679-8r15bisu1jthcot1eudgm00uaesutfrf.apps.googleusercontent.com"
                                    buttonText="Sign in with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />, */}
                            </View>
                            <Modal visible={visible} animationType='fade'>
                                <Text>Bienvenido {addUser.email}</Text>
                            </Modal>
                        </TouchableOpacity>
                        <View>
                            <Text>Don't have an account?</Text>
                            {/* <Text to="/signup">Sign up here!</Link>  */}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
                <View>
                    {/* <Image className="imgLog" src="/assets/signUp.png" alt="usuer"/> */}
                </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
})

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn
}


export default connect(null, mapDispatchToProps) (SignIn)