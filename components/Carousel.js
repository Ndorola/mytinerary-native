
import * as React from 'react';
import {
    Text, 
    View,
    SafeAreaView, 
    ImageBackground,
    StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        activeIndex:0,
        carouselItems: [
            {img: 'London.jpg', citie: 'London'},
            {img: 'Paris.jpg', citie: 'Paris'},
            {img: 'Bali.jpg', citie: 'Bali'},
            {img: 'Cafayate.jpg', citie: 'Cafayate'},
            {img: 'Calafate.jpg', citie: 'Calafate'},
            {img: 'Bangkok.jpg', citie: 'Bangkok'},
            {img: 'NewYork.jpg', citie: 'New York'},
        ]
        }
    }

    _renderItem({item,index}){
        return (
        <View style={{
            backgroundColor:'floralwhite',
            borderRadius: 5,
            width: 200,
            height: 250,
            // padding: 50,
            marginLeft: 25,
            marginRight: 25, }}>
                <ImageBackground source={{uri:`https://nd-mytinerary.herokuapp.com/assets/fotos/${item.img}`}} style={styles.imgCarousel}>
                    <Text style={{fontSize: 30}}>{item.citie}</Text>
                    <Text>{item.citie}</Text>
                </ImageBackground>
        </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    imgCarousel: {
        width: '80',
        height: '100%',
        resizeMode: 'cover',
    }
})