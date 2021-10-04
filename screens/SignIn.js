import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, StatusBar, ImageBackground, TouchableHighlight, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
import Footer from "../components/Footer"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
// import {} from '@expo/vector-icons'

const SignIn = (props) => {

    const [addUser, setAddUser] = useState({
        email: "",
        password: ""
    })

    const [visible, setVisible] = useState(false)


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

    return  (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={{uri:'https://i.postimg.cc/tCWFSBsX/logueo.png'}} style={styles.background}>
            <View style={styles.mainForm} action="/users/signup" method="POST">
                <View style={styles.form}>
                        <Text style={styles.title}>Welcome back!</Text>
                        <Text style={styles.subtitle}>Sign in to discover and connect with MYtinerary's global community</Text>
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='at'
                            size={24}
                            color='orange'
                            />
                        }
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setAddUser({...addUser, email: e.nativeEvent.text})}
                        errorStyle={{ color: 'transparent' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='orange'
                            />
                        }
                        secureTextEntry={true}
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setAddUser({...addUser, password: e.nativeEvent.text})}
                        keyboardType= 'numeric'
                        errorStyle={{ color: 'transparent' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                </View>
                <View style={styles.botonera}>
                    <TouchableOpacity>
                        <View style={styles.boxButton}>
                            <Text style={styles.button} onPress={submitData}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.boxTextLogueo}>
                        <Text style={styles.textLogueo}>Don't have an account?</Text>
                        <TouchableHighlight style={styles.botonAction}>
                            <Text style={styles.textAction} onPress={() => {props.navigation.navigate('signup')}}>Sign up here!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn
}

export default connect(null, mapDispatchToProps) (SignIn)

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    mainForm: {
        marginTop: '8%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 24,
        fontWeight: '500'
    },
    subtitle: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: '10%'
    },
    input: {
        marginLeft: '10%'
    },
    select: {
        color: 'orange',
        marginLeft: '15%',
    },
    form: {
        width: '80%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botonera: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    boxButton: {
        backgroundColor: 'white',
        width: '40%',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: '4%'
    },
    button: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: 'orange',
    },
    boxTextLogueo: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textLogueo: {
        color: 'grey',
        fontSize: 16,
        marginTop: '4%'
    },
    textAction: {
        color: 'orange',
        fontSize: 16,
        fontWeight: '600',
    },
    botonAction: {
        marginTop: '4%'
    }
})