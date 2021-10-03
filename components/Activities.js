import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction"

const Activities = (props) => {
    console.log('en activities')
    console.log(props)
    console.log('en activities 2')


    let activitiesByIt = props.activities

    console.log('variable')
    console.log(activitiesByIt)

    return (
        <View>  
        {/* <Text>{props.activities}</Text>  */}
                <View>
                    {activitiesByIt.map((activity => (
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

export default connect (mapStateToProps)(Activities)

const styles = StyleSheet.create({})
