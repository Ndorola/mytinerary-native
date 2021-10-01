import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Menu = () => {
    return (
        <View style={styles.menu}>
            <Text>Menu</Text>
                <TouchableOpacity>
                <View style={styles.button}>
                <Text style={styles.buttonText} onPress={() => {
                    props.navigation.navigate('cities')
                }}>START DREAMING</Text>
                </View>
                </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    }
})
