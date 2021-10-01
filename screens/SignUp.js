import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, StatusBar, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
import RNPickerSelect from 'react-native-picker-select'

const SignUp = () => {
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

    // var countries = ["Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", " Ecuador "," El Salvador "," United States "," Granada "," Guatemala "," Guyana "," Haiti "," Honduras "," Jamaica "," Mexico "," Nicaragua "," Panama "," Paraguay "," Peru "," Dominican Republic "," Santa Lucia "," Surinam "," Uruguay "," Venezuela "]

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

    

    return  (
        <SafeAreaView style={styles.mainContainer}>
            <View className="mainForm">
            <View action="/users/signup" method="POST">
                <View className="formBox">
                    <Text>Sign Up!</Text>
                    <View className="formTextInput">
                        <View>
                            <TextInput
                                name="name"
                                type="text"
                                placeholder="First name"
                                onChange={(e) => setAddUser({...addUser, name: e.nativeEvent.text})}
                            />
                            {/* {error && error.find(err => err.path[0]==="name") && <Text className="TextInputError">{error.find(err => err.path[0]==="name").message}</Text>} */}
                        </View>
                        <View>
                            <TextInput
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                onChange={(e) => setAddUser({...addUser, lastName: e.nativeEvent.text})}
                            />
                            {/* {error && error.find(err => err.path[0]==="lastName") && <Text className="TextInputError">{error.find(err => err.path[0]==="lastName").message}</Text>} */}
                        </View>
                    </View>
                    <View className="formTextInput">
                        <View>
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setAddUser({...addUser, email: e.nativeEvent.text})}
                            />
                            {/* {error && error.find(err => err.path[0]==="email") && <Text className="TextInputError">{error.find(err => err.path[0]==="email").message}</Text>} */}
                        </View>
                        <View>
                            <TextInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setAddUser({...addUser, password: e.nativeEvent.text})}
                                keyboardType= 'numeric'
                            />
                            {/* {error && error.find(err => err.path[0]==="password") && <Text className="TextInputError">{error.find(err => err.path[0]==="password").message}</Text>} */}
                        </View>
                    </View>
                    <View className="formTextInput">
                        <View>
                            <TextInput
                                name="url"
                                type="text"
                                placeholder="Url image"
                                onChange={(e) => setAddUser({...addUser, url: e.nativeEvent.text})}
                            />
                        </View>
                        {/* <RNPickerSelect
                            placeholder={{ label: "Choose your Country", value: null }}
                            onValueChange={(value) => setAddUser({...addUser, country: e.nativeEvent.text})}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'aaaa', value: 'aaaa' },   
                            ]}
                        /> */}
                    </View>
                </View>
                <TouchableOpacity>
                    <View className="buttonsForm">
                        <Text className="btnForm" onPress={submitData}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View className="linkRedirect">
                    <Text>Already have an account?</Text>
                    {/* <Link to="/login">Log In here!</Link> */}
                </View>
            </View>
                <View>
                    {/* <Image className="imgLog" src="/assets/signUp.png" alt="usuer"/> */}
                </View>
        </View>
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
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
})



