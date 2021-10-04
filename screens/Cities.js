import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TextInput, TouchableWithoutFeedback, ScrollView, Keyboard, ImageBackground, TouchableOpacity } from 'react-native'
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import City from './City';
import Loader from "../components/Loader";
import { FontAwesome } from '@expo/vector-icons'

const Cities = (props) => {
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCities() {
            try{
                await props.getCities()
            } catch(error) {
                console.log('alert')
                // setTimeout(() => {
                //     props.history.push('/')
                // }, 3000)
            }
            setLoading(false)
        }
        getCities()
    }, [])

    if (loading) {
        return <Loader/>
    }

    const captionCity = (e) => {
        props.filterCities(e)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Text style={styles.citiesTitle}>Find Your Adventure!</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View style={styles.boxSearch}>
                        <FontAwesome style={styles.iconsearch} name="search" size={24} color="orange" /><TextInput style={styles.search} onChangeText = {captionCity} placeholder='Where would you like to go?'/>
                    </View>
                </TouchableWithoutFeedback>
                <ScrollView>
                <View style={styles.citiesScroll}>
                {(props.searchedCities.length !== 0) ? props.searchedCities.map ((city, index) => {
                return (
                    <View style={styles.boxCity} key={index}>
                        <TouchableOpacity onPress={() => {
                                props.navigation.navigate('city', {
                                    id: city._id
                                })
                            }}>
                            <View>
                                <ImageBackground source={{uri:`https://nd-mytinerary.herokuapp.com/assets/fotos/${city.img}`}} style={styles.cityBackground}>
                                    <Text style={styles.cityName}>{city.name}</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }): <View style={styles.boxUps}>
                    <Image source={{uri:'https://i.postimg.cc/Lsx9ycdg/ups.png'}} style={styles.ups}/>
                    <Text style={styles.textUps}>Sorry, that city was not found.</Text>
                </View>
            }
            </View>
        </ScrollView>
        <Footer />       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    citiesScroll: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    citiesTitle:{
        color: 'orange',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: '5%'
    },
    search: {
        fontSize: 16,
        fontWeight: '500',
        padding: '3%',
        color: 'orange'
    },
    boxSearch: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '80%',
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '2%'
    },
    iconsearch: {
        padding: '2%'
    },
    boxCity: {
        width: '85%',
        borderRadius: 15,
        height: 150,
        marginVertical: '3%'
    },
    cityBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
        justifyContent: 'flex-end'
    },
    cityName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        padding: '2%',
        backgroundColor: 'orange'
    },
    ups: {
        width: 120,
        height: 150
    },
    textUps: {
        color: 'orange',
        fontWeight: '500',
        fontSize: 18
    },
    boxUps: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    }
})

const mapStateToProps = (state) => {
    return {
        searchedCities: state.cities.searchedCities,
        citiesList: state.cities.citiesList
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)