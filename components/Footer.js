import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.copy}>myTinerary Proyect 2021 - All Rights Reserved</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    copy: {
        color: 'white',
        fontWeight: '500'
    }
})
