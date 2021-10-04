import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import Footer from "../components/Footer"
import MyCarousel from '../components/MyCarousel'

const Welcome = (props) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scroll}>
            <View style={styles.boxHero}>
                <ImageBackground source={{uri:'https://i.postimg.cc/qqQ7h3b6/herochiqui.png'}} style={styles.hero}>
                    <Image source={{uri:'https://i.postimg.cc/L8dd982B/loguito.png'}} style={styles.logo}/>
                    <Text style={styles.callP}>Feel free to check our itineraries and activities!</Text>
                    <TouchableOpacity>
                        <View style={styles.boxButton}>
                            <Text style={styles.buttonCall} onPress={() => {props.navigation.navigate('cities')}}>GO THERE!</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.boxCarousel}>
                <MyCarousel />
            </View>
            </ScrollView>
            <Footer />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainContainer: {
    //     marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
    mainWelcome: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-around'
    },
    boxHero: {
        width: '100%',
        height: '60%',
        marginBottom: '1.5%'
    },
    hero: {
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '75%',
        height: '40%'
    },
    callP: {
        fontSize: 18,
        color: 'white',
        width: '75%',
        textAlign: 'center',
        fontWeight: '600'
    },
    boxButton: {
        backgroundColor: 'white',
        width: '40%',
        padding: 7,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: '5%'
    },
    buttonCall: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: 'orange'
    },
    boxCarousel: {
        width: '90%',
        height: '100%'
    }
})
