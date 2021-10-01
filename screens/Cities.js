import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TextInput, TouchableWithoutFeedback, ScrollView, Keyboard, ImageBackground } from 'react-native'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
// import Loader from "../components/Loader";

const Cities = (props) => {
    
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCities() {
            try{
                await props.getCities()
            } catch(error) {
                console.log('alert')
                setTimeout(() => {
                    props.history.push('/')
                }, 3000)
            }
            // setLoading(false)
        }
        getCities()
    }, [])

    // if (loading) {
    //     return <Loader/>
    // }

    const captionCity = (e) => {
        props.filterCities(e)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
                <Header />
                <View>
                    <Text>Find Your Adventure!</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View>
                        <TextInput onChangeText = {captionCity} placeholder='Where would you like to go?'/>
                    </View>
                </TouchableWithoutFeedback>
                <ScrollView>
                {(props.searchedCities.length !== 0) ? props.searchedCities.map ((city, index) => {
                return (
                    <View key={index} to={`/city/${city._id}`}>
                        <View>
                            <View>
                                <ImageBackground source={{uri:`https://nd-mytinerary.herokuapp.com/assets/fotos/${city.img}`}} style={styles.boxCity}>
                                    <Text>{city.features}</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                )
            }): <View >
                    {/* <Image src="/assets/ups.png"/> */}
                    <Text>Sorry, that city was not found. Try again!</Text>
                </View>
            }
        </ScrollView>
        <Menu />       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
    boxCity: {
        width: '50',
        height: '50',
        resizeMode: 'cover',
    }
})

const mapStateToProps = (state) => {
    return {
        searchedCities: state.cities.searchedCities,
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)