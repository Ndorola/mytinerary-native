import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import itinerariesActions from "../redux/actions/itinerariesAction";
import Itinerary from "../components/Itinerary";

const City = (props) => {
    // console.log(props)
    const city = props.citiesList.find((city) => city._id === props.route.params.id)
    
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getItineraries() {
            try{
                await props.getItineraries()
            } catch(error) {
                console.log('Oops! There was a mistake')
            }
            // setLoading(false)
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
    
    // if (loading) {
    //     <Loader/>
    // }

    let itineraries = props.itinerariesList.filter((itinerary) => itinerary.cityId === props.route.params.id)
    // console.log(itineraries)

    return (
        <>
            <View >
                {/* <View className="headerCity">
                    <nav id="navBar">
                        <NavLink exact to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/cities"><p>Cities</p></NavLink>
                        {!props.token && <NavLink to = "/signup"><p>Sign up</p></NavLink>}
                        {!props.token && <NavLink to = "/signin"><p>Sign in</p></NavLink>}
                        {props.token && <p className="pNav" onClick={() => props.signOut()}>Sign Out</p>} 
                    </nav>
                    <View className="userBox">
                        {props.token && <Text className="welcomeUser">Welcome {props.name}!</Text>}
                        <Text to = "/user">{props.token ? <Image id="user" src={`${props.url}`}/> : <Image id="user" src="/assets/iconUser.png" alt="iconUser"/>}</Text>
                    </View>
                </View> */}
                <View>
                    <Text>Welcome to {city.name}</Text>
                </View>
            </View>
            {(itineraries.length !== 0) ? itineraries.map((itinerary, index) => <Itinerary key={index} city={city.name} it={itinerary}/>)
                : <View >
                    {/* <Image src="/assets/ups.png"/> */}
                    <Text>Sorry, this city has no itineraries. Back to home!</Text>
                </View>
            }           
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