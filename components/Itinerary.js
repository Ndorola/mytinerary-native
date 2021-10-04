import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from "react"
import { connect } from "react-redux";
import Activities from "./Activities"
import itinerariesActions from "../redux/actions/itinerariesAction"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Loader from './Loader';
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

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
        
        const icons = [1, 2, 3, 4, 5]
        let quantityIcons  = icons.splice(0,it.price)
        
        const [countLikes, setCountLikes] = useState(it.likes)
        // const [likedColor, setLikedColor] = useState(false)
        
        const likes = async () => {
            if(!props.token) {
                alert.alert('You need to log in to like an itinerary')
            } else {
                try {
                    let response = await props.addLike(props.it._id, props.token)
                    if(response.success) {
                        setCountLikes(response.response)
                        // setLikedColor(!likedColor ? true : false)
                    } else {
                        throw new Error ('Something went wrong')
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        
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

    // const changeIcon = setLikedColor === false ? <AntDesign name="hearto" size={24} color="black" /> : <AntDesign name="heart" size={24} color="#df4137" />
    // const changeIcon = !setLikedColor ? "#df4137" : "#dfa094"
    // const changeIcon = countLikes.includes(it._id) ? "#df4137" : "#dfa094"

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
            <View style={styles.mainItinerary}>
                    {/* <View className="itImage" style={{backgroundImage: `url("/assets/itineraries/${it.itinerary.img}")`}}></View> */}
                    <View style={styles.boxItinerary}>
                        <View style={styles.boxUser}>
                            <Image style={styles.imgUser} source={{uri:`https://nd-mytinerary.herokuapp.com/assets/itineraries/${it.user.img}`}}/>
                            <Text style={styles.nameUser}>{it.user.name}</Text>
                        </View>
                        <View style={styles.boxIt}>
                            <Text style={styles.itTitle}>{it.itinerary.title}</Text>
                            <Text style={styles.itDesc}>{it.itinerary.description}</Text>
                        </View>
                        <View style={styles.boxhashtag}>
                        {it.hashtags.map((hashtag, index) => (
                            <Text style={styles.hashtag}key={index}>{hashtag}</Text>
                        ))}
                        </View>
                        <View style={styles.boxIcons}>
                            <View style={styles.boxPrice}>
                                <Text style={styles.price}>Price: </Text>
                                {quantityIcons.map((icon, index) => <FontAwesome5 key={index} name="money-bill" size={24} color="#3b7207" style={styles.icon}/>)}
                            </View>
                            <View style={styles.boxHour}>
                                <MaterialCommunityIcons name="clock" size={24} color="#3b989a" style={styles.icon}/>
                                <Text style={styles.price}>{it.time} hours</Text>
                            </View>
                            <View style={styles.boxHour}>
                                <TouchableOpacity onPress={likes}>
                                    {/* {changeIcon} */}
                                    <AntDesign name="heart" size={24} color="#df4137" style={styles.icon}/>
                                </TouchableOpacity>
                                <Text style={styles.like}>{countLikes.length}</Text>
                            </View>
                        </View>
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
                            <View style={styles.botonera}>
                                <TouchableOpacity onPress={props.getActivities} onPress={toggle}>
                                    <View style={styles.boxButton}>
                                        <Text style={styles.buttonCall}>
                                            {!visible ? "View More" : "View Less"}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
    mainItinerary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%'
    },
    boxItinerary: {
        borderWidth: 2,
        borderColor: 'orange',
        width: '90%',
        borderRadius: 25,
        padding: '4%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: '4%'
    },
    boxUser: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // padding: '%'
    },
    imgUser: {
        width: 70,
        height: 70,
    },
    nameUser: {
        color: '#ee2a84',
        fontSize: 20
    },
    boxIt: {

    },
    itTitle: {
        color: 'orange',
        fontSize: 22,
        fontWeight: '600',
        marginVertical: '1%'
    },
    itDesc: {
        color: '#ee2a84',
        fontSize: 16
    },
    boxhashtag: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '8%'
    },
    hashtag: {
        color:'orange',
        fontSize: 16
    },
    boxIcons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: '3%'
    },
    boxPrice: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        color: '#ee2a84',
        fontSize: 16 
    },
    icon: {
        marginHorizontal: '2%'
    },
    boxHour: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hour: {
        color: '#ee2a84',
        fontSize: 16 
    },
    boxButton: {
        backgroundColor: 'white',
        width: '100%',
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
        marginTop: '5%'
    },
    buttonCall: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: 'orange'
    },
    botonera: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    like: {
        color: '#ee2a84',
        fontSize: 16 
    }
})