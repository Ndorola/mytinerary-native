import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import itinerariesActions from "../redux/actions/itinerariesAction";
import Itinerary from "../components/Itinerary";
import Loader from '../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';

const City = (props) => {
    // console.log(props)
    const city = props.citiesList.find((city) => city._id === props.route.params.id)
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getItineraries() {
            try{
                await props.getItineraries()
            } catch(error) {
                console.log('Oops! There was a mistake')
            }
            setLoading(false)
        }
        getItineraries()
    }, [])

    // if(!props.city) {
    //     console.log('Oops! There was a mistake')
    //     // Swal({
    //     //     title:"Oops! There was a mistake.",
    //     //     text:"The link you selected may be broken or the page may have been removed.",
    //     //     icon:"warning",
    //     //     button:"Ok!",
    //     // })
    //     return false
    // }
    
    if (loading) {
        <Loader/>
    }

    let itineraries = props.itinerariesList.filter((itinerary) => itinerary.cityId === props.route.params.id)
    // console.log(itineraries)

    return (
        <>
            <View style={styles.boxHero}>
                <ImageBackground source={{uri:`https://nd-mytinerary.herokuapp.com/assets/fotos/${city.img}`}} style={styles.hero}>
                    <Text style={styles.textWelcome}>Welcome to {city.name} {props.name}!</Text>
                </ImageBackground>
            </View>
            <ScrollView> 
                {(itineraries.length !== 0) ? itineraries.map((itinerary, index) => <Itinerary key={index} city={city.name} it={itinerary}/>)
                    : <View style={styles.boxUps}>
                        <Image source={{uri:'https://i.postimg.cc/Lsx9ycdg/ups.png'}} style={styles.ups}/>
                        <Text style={styles.textUps}>Sorry, this city has no itineraries for now.</Text>
                    </View>
                }     
            </ScrollView>      
        </>
    )
}

const mapStateToProps = state => {
    return {
        citiesList: state.cities.citiesList,
        itinerariesList: state.itineraries.itinerariesList,
        token: state.users.token,
        name: state.users.name,
        url: state.users.url,
        signOut: state.users.logOut
    }
}

const mapDispatchToProps = {
    getItineraries: itinerariesActions.getItineraries,
}

export default connect (mapStateToProps, mapDispatchToProps)(City)

const styles = StyleSheet.create({
    boxHero: {
        width: '100%',
        height: '40%',
        marginBottom: '1.5%'
    },
    hero: {
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textWelcome: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        padding: '2%',
        backgroundColor: 'orange',
        width: '100%'
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
        marginTop: '5%'
    }
})