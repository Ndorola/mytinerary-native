import React from "react"
import { StyleSheet, ImageBackground} from 'react-native'

const Loader = () => {
    return (
        <ImageBackground source={{uri:'https://i.postimg.cc/ncw3c6cn/loader.png'}} style={styles.loader}></ImageBackground>
    )
}

export default Loader

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    }
})