import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Welcome = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header />
            <View style={styles.mainWelcome}>
                <View style={styles.backgroundBox}>
                    <ImageBackground  source={{uri:'https://i.postimg.cc/TwhhTnS4/imgcall.png'}} style={styles.boxCall}>
                        <View style={styles.callToAction}>
                            <Text style={styles.callH2}>What are you waiting for?</Text>
                            <Text style={styles.callP}>Feel free to check our itineraries and activities!</Text>
                            <TouchableOpacity onPress={() => {console.log('soy el boton')}}>
                                <View style={styles.boxButton}>
                                    <Text style={styles.buttonCall} onPress={() => {props.navigation.navigate('cities')}}>GO THERE!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.boxCarousel}>
                    <Text>Popular Mytineraries</Text>
                    <Text>boxCarousel</Text>
                </View>
            </View>
            <Menu />
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
    mainWelcome: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-around'
    },
    backgroundBox: {
        width: '90%',
        height: '50%',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 50,
    },
    boxCall: {
        // flex: 1,
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    callToAction: {
        height: '90%',
        padding : 20,
        justifyContent: 'space-evenly',
    },
    callH2:{
        fontWeight: 'bold',
        fontSize: 35,
        color: 'rgb(245, 153, 0)',
    },
    callP: {
        fontSize: 18,
        color: 'rgb(238, 42, 132)',
        width: '75%',
    },
    boxButton: {
        backgroundColor: 'rgb(238, 42, 132)',
        width: '40%',
        padding: 5,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonCall: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    boxCarousel: {
        width: '90%',
        height: '50%',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 30
    }
})
