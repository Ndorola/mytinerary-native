import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction"
import { useState, useEffect } from "react"
import Loader from './Loader';

const Activities = (props) => {
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getActivities() {
                try {
                    let response = await props.getActivities(props.it);
                    setActivities(response.response.activities);
                } catch (err) {
                    console.log(err.message);
                }
                setLoading(false)
            }
            getActivities();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        console.log('ennnn activityyyyyyyyyy')
        console.log(activities)

        if (loading) {
            <Loader/>
        }


    // console.log('en activities')
    // console.log(props)
    // console.log('en activities 2')

    console.log('ennnn activityyyyyyyyyy')
    console.log('ennnn variableeee')
    // var activityyy = activities.activities
    console.log('activityyyy arriba')
    console.log('ennnn variableeee')
    

    // console.log('variable')
    // console.log(activitiesByIt)

    return (
        <View>  
        {/* <Text>{props.activities}</Text>  */}
                <View>
                    {activities.map((activity => (
                        <View key={activity._id} >
                            {/* <Image src={`/assets/activities/${activity.img}`} /> */}
                            <View >
                                <Text>{activity.title}</Text>
                            </View>
                        </View>
                    )))}
            </View>
        </View>
    )
}

// const mapStateToProps = (state) => {
//     return {
//       selectActivities: state.activities.selectActivities,
//     };
//   };

const mapStateToProps = state => {
    return {
        token: state.users.token,
        getActivities: itinerariesActions.getActivities,
    }
}

// const mapStateToProps = (state) => {
//     return {
//       selectActivities: state.activities.selectActivities,
//     };
//   };

const mapDispatchToProps = {
    getActivities: itinerariesActions.getActivities,
    addLike: itinerariesActions.addLike,
    addComment: itinerariesActions.addComment,
}

export default connect (mapStateToProps, mapDispatchToProps)(Activities)

const styles = StyleSheet.create({})



// let activitiesByIt = props.activities.map((activity, index) => {
    //     return (
    //         <ImageBackground style={styles.activityImg} key={index} source={{uri:activity.img}}>
    //             <Text>{activity.title}</Text>
    //         </ImageBackground>
    //     )
    // })
