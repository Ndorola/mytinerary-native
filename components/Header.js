import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={{uri: 'https://i.postimg.cc/L5kWtVzy/logo.png'}} style={styles.logo} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    logo: {
        width: 160,
        height: 50,
        marginTop: 10,
        marginBottom: 30
    },
})