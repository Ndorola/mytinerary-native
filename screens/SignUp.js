import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, StatusBar, SafeAreaView, TouchableOpacity, TouchableHighlight, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native'
import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const SignUp = (props) => {
    const [addUser, setAddUser] = useState({
        name: "",
        lastName: "",
        email: "",
        url: "",
        country: "",
        password: "",
    })

    // const [error, setError] = useState(null)
    
    console.log(addUser)

    const submitData = async (e) => {
        e.preventDefault()
        try {
                let response = await props.signUp(addUser)
                console.log(response.data)
            if(!response.data.success) {
                if(response.data.response === 'This user is already registered') {
                    alert(response.data.response)
                } else {
                    setError(response.data.error)   
                }
            }
        } catch(error) {
            console.log('Something went wrong, try again later + SOY EL CONOSLE.LOG SIGNUP')
    }
}

    const pickerStyle = {
        inputIOS: {
            color: 'white',
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'orange',
            borderRadius: 5,
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 16,
            marginVertical: '4%'
        },
        placeholder: {
            color: 'white',
            textAlign: 'center'
        },
        inputAndroid: {
            color: 'white',
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: 'orange',
            borderRadius: 5,
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 16,
            marginVertical: '4%'
        },
    };
    

    return  (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={{uri:'https://i.postimg.cc/tCWFSBsX/logueo.png'}} style={styles.background}>
            <View style={styles.mainForm} action="/users/signup" method="POST">
                <View style={styles.form}>
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='orange'
                            />
                        }
                        name="name"
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setAddUser({...addUser, name: e.nativeEvent.text})}
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='orange'
                            />
                        }
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        onChange={(e) => setAddUser({...addUser, lastName: e.nativeEvent.text})}
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='at'
                            size={24}
                            color='orange'
                            />
                        }
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setAddUser({...addUser, email: e.nativeEvent.text})}
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                        <Input
                        style={styles.input}
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='orange'
                            />
                        }
                        secureTextEntry={true}
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setAddUser({...addUser, password: e.nativeEvent.text})}
                        keyboardType= 'numeric'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        color= 'orange'
                        placeholderTextColor= 'grey'
                        />
                        <RNPickerSelect
                            style={pickerStyle}
                            color= 'orange'
                            label= 'grey'
                            placeholder={{ label: "Choose your Country", value: null, color: 'orange', }}
                            onValueChange={(value) => setAddUser({...addUser, country: value})}
                            items={[
                                { label: 'Argentina', value: 'Argentina', color: 'orange', },
                                { label: 'Bahamas', value: 'Bahamas', color: 'orange',  },   
                                { label: 'Barbados', value: 'Barbados', color: 'orange',  },   
                                { label: 'Belize', value: 'Belize', color: 'orange',  },   
                                { label: 'Bolivia', value: 'Bolivia', color: 'orange',  },   
                                { label: 'Brazil', value: 'Brazil', color: 'orange',  },   
                                { label: 'Canada', value: 'Canada', color: 'orange',  },   
                                { label: 'Chile', value: 'Chile', color: 'orange',  },   
                                { label: 'Colombia', value: 'Colombia', color: 'orange',  },   
                                { label: 'Costa Rica', value: 'Costa Rica', color: 'orange',  },   
                                { label: 'Cuba', value: 'Cuba', color: 'orange',  },   
                                { label: 'Dominica', value: 'Dominica', color: 'orange',  },   
                                { label: 'Ecuador', value: 'Ecuador', color: 'orange',  },   
                                { label: 'El Salvador', value: 'El Salvador', color: 'orange',  },   
                                { label: 'United States', value: 'United States', color: 'orange',  },   
                                { label: 'Granada', value: 'Granada', color: 'orange',  },   
                                { label: 'Guatemala', value: 'Guatemala', color: 'orange',  },   
                                { label: 'Guyana', value: 'Guyana', color: 'orange',  },   
                                { label: 'Haiti', value: 'Haiti', color: 'orange',  },   
                                { label: 'Honduras', value: 'Honduras', color: 'orange',  },   
                                { label: 'Jamaica', value: 'Jamaica', color: 'orange',  },   
                                { label: 'Mexico', value: 'Mexico', color: 'orange',  },   
                                { label: 'Nicaragua', value: 'Nicaragua', color: 'orange',  },   
                                { label: 'Panama', value: 'Panama', color: 'orange',  },   
                                { label: 'Paraguay', value: 'Paraguay', color: 'orange',  },   
                                { label: 'Peru', value: 'Peru', color: 'orange',  },   
                                { label: 'Dominican Republic', value: 'Dominican Republic', color: 'orange',  },   
                                { label: 'Santa Lucia', value: 'Santa Lucia', color: 'orange',  },   
                                { label: 'Surinam', value: 'Surinam', color: 'orange',  },   
                                { label: 'Uruguay', value: 'Uruguay', color: 'orange',  },   
                                { label: 'Venezuela', value: 'Venezuela', color: 'orange',  },   
                            ]}
                        />
                </View>
                <View style={styles.botonera}>
                    <TouchableOpacity>
                        <View style={styles.boxButton}>
                            <Text style={styles.button} onPress={submitData}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.boxTextLogueo}>
                        <Text style={styles.textLogueo}>Already have an account?</Text>
                        <TouchableHighlight>
                            <Text style={styles.textAction} onPress={() => {props.navigation.navigate('signin')}}>Log In here!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const mapStateToProps = (state) => {
    return {
        countries: state.users.countries,
    }
}

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn,
    getCountries: userActions.getCountries
}


export default connect(mapStateToProps, mapDispatchToProps) (SignUp)

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    mainForm: {
        marginTop: '8%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 30,
        marginVertical: '5%',
        marginLeft: '15%'
    },
    input: {
        marginLeft: '10%'
    },
    select: {
        color: 'orange',
        marginLeft: '15%',
    },
    form: {
        width: '80%'
    },
    form: {
        marginTop: '4%'
    },
    botonera: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%'
    },
    boxButton: {
        backgroundColor: 'white',
        width: '40%',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: '4%'
    },
    button: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: 'orange'
    },
    boxTextLogueo: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textLogueo: {
        color: 'grey',
        fontSize: 16
    },
    textAction: {
        color: 'orange',
        fontSize: 16,
        fontWeight: '600'
    }
})

{/* <Input
placeholder="Comment"
leftIcon={{ type: 'font-awesome', name: 'comment' }}
style={styles}
onChangeText={value => this.setState({ comment: value })}
/> */}

{/* <View>
                                <TextInput
                                    name="name"
                                    type="text"
                                    placeholder="First name"
                                    onChange={(e) => setAddUser({...addUser, name: e.nativeEvent.text})}
                                />
                                {error && error.find(err => err.path[0]==="name") && <Text className="TextInputError">{error.find(err => err.path[0]==="name").message}</Text>}
                            </View> */}
                            {/* <View>
                                <TextInput
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    onChange={(e) => setAddUser({...addUser, lastName: e.nativeEvent.text})}
                                />
                                {error && error.find(err => err.path[0]==="lastName") && <Text className="TextInputError">{error.find(err => err.path[0]==="lastName").message}</Text>}
                            </View> */}
                        
                            {/* <View>
                                <TextInput
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setAddUser({...addUser, email: e.nativeEvent.text})}
                                />
                                {error && error.find(err => err.path[0]==="email") && <Text className="TextInputError">{error.find(err => err.path[0]==="email").message}</Text>}
                            </View> */}
                            {/* <View>
                                <TextInput
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setAddUser({...addUser, password: e.nativeEvent.text})}
                                    keyboardType= 'numeric'
                                />
                                {error && error.find(err => err.path[0]==="password") && <Text className="TextInputError">{error.find(err => err.path[0]==="password").message}</Text>}
                            </View> */}
                    
                        
                            {/* <View>
                                <TextInput
                                    name="url"
                                    type="text"
                                    placeholder="Url image"
                                    onChange={(e) => setAddUser({...addUser, url: e.nativeEvent.text})}
                                />
                            </View> */}