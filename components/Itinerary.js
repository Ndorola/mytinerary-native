import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from "react"
import { connect } from "react-redux";
import Activities from "./Activities"
import itinerariesActions from "../redux/actions/itinerariesAction"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Loader from './Loader';

const Itinerary = (props) => {
    // console.log(props)
    const [activities, setActivities] = useState()
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    
    const toggle = () => setVisible(!visible);
    
    const it = props.it
    const city = props.city

    useEffect(() => {
        if (visible) {
            async function getActivities() {
                try {
                    let response = await props.getActivities(it._id);
                    setActivities(response.response.activities);
                } catch (err) {
                    console.log(err.message);
                }
                setLoading(false)
            }
            getActivities();
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [visible]);
        console.log(activities)
        
        // const [liked, setLiked] = useState(it.likes)
        // const [likedColor, setLikedColor] = useState(false)
        
        // const icons = [1, 2, 3, 4, 5]
        // let quantityIcons  = icons.splice(0,it.price)
        
        // const toggleLike = async () => {
            //     if (!props.token){
                //         alert('te tenes que loguear')
                //     } else {
                    //         try {
                        //             let response = await props.addLike(props.it._id, props.token)
                        //             if(response.success) {
                            //                 setLiked(response.response)
    //                 setLikedColor(true)
    //             } else {
    //                 throw new Error ('no funciono')
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
            
    //     }

        // liked ? setLiked(false) : setLiked(true)
    // }

    // const changeIcon = liked ? <FcLike/> : <FcLikePlaceholder/> usaba este

    // const changeIcon = liked.includes(it._id) ? <FcLike/> : <FcLikePlaceholder/>


    // sabri likes
    // <TouchableOpacity onPress={likeFunction}>
    //     <View style={styles.likes}>
    //       <Icon
    //         raised
    //         name={quore ? "heart" : "heart-o"}
    //         type="font-awesome"
    //         value={quore ? "user" : "smile"}
    //         quore={quore}
    //         color={quore ? "pink" : "white"}
    //       />
    //       <Text>{harts.length}</Text>
    //     </View>
    //   </TouchableOpacity>

    // setQuore(!quore);

    // const likeFunction = () => {
    //     if (!props.token) {
    //       Alert.alert("You most to be loggin for this");
    //     } else {
    //       props
    //         .putLikesItinerary(props.itinerary._id, props.token) ///falta tener el id disponible cuando envian el token
    //         .then((res) => {
    //           if (res.success) {
    //             setHarts(res.response);
    //             setQuore(!quore);
    //           } else {
    //             console.log(res.response);
    //           }
    //         });
    //     }
    //   };

//     const [quore, setQuore] = React.useState(false);

//   const onButtonToggle = (value) => {
//     setQuore(quore === false ? true : false);
//   };

    if (loading) {
        <Loader/>
    }

    return (
        <>  
            <View>
                    {/* <View className="itImage" style={{backgroundImage: `url("/assets/itineraries/${it.itinerary.img}")`}}></View> */}
                    <View >
                        {/* <View className="itUser">
                            <Image src={`/assets/itineraries/${it.user.img}`}/>
                            <p>{it.user.name}</p>
                        </View> */}
                        <View >
                            <Text>{it.itinerary.title}</Text>
                            <Text>{it.itinerary.description}</Text>
                        </View>
                        <View >
                        {it.hashtags.map((hashtag, index) => (
                            <Text key={index}>{hashtag}</Text>
                        ))}
                        </View>
                        {/* <View className="iconsBox">
                            <View className="itIcons">
                                <p>Price: </p>
                                {quantityIcons.map((icon, index) => <p key={index}><FcCurrencyExchange/></p>)}
                            </View>
                            <View className="itIcons">
                                <p><FcClock/></p>
                                <p>{it.time} hours</p>
                            </View>
                            <View className="itIcons">
                                <button className="btnLike" onClick={toggleLike}>{changeIcon}</button>
                                <p>{liked.length}</p>
                            </View>
                        </View> */}
                    </View>
                    <View >
                        <View >
                            {visible?
                            <View >
                                <View>   
                                    <Text>Activities to do in {city}</Text>
                                </View>
                                <View>
                                    {/* <Comment itId={it._id} comments={it.comments}/> */}
                                    <Activities activities={activities}/>
                                </View>
                            </View>
                            : null}
                            <TouchableOpacity onPress={props.getActivities} onPress={toggle}>
                                <Text>
                                    {!visible ? "View More" : "View Less"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>   
            </>
            )
        }

    // const mapStateToProps = (state) => {
    //     return {
    //         selectItinerary: state.itineraries.selectItinerary,
    //         selectActivities: state.activities.selectActivities,
    //         token: state.users.token,
    //         img: state.users.img,
    //         firstname: state.users.firstname,
    //         userId: state.users.userId,
    //     };
    //     };
        
    //     const mapDispatchToProps = {
    //     getActivitiesByItineraryId: activitiesActions.getActivitiesByItineraryId,
    //     putLikesItinerary: itinerariesActions.putLikesItinerary,
    //     putCommentsByItineraryId: itinerariesActions.putCommentsByItineraryId,
    //     putDeleteCommentsByItineraryId:
    //         itinerariesActions.putDeleteCommentsByItineraryId,
    //     };
        
    //     export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);

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

export default connect (mapStateToProps, mapDispatchToProps) (Itinerary)

const styles = StyleSheet.create({
    mainContainer: {
        // marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
})