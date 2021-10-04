// import * as React from 'react';
// import {
//     Text, 
//     View,
//     SafeAreaView, 
//     ImageBackground,
//     StyleSheet,
// } from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// export default class MyCarousel extends React.Component {
 
//     constructor(props){
//         super(props);
//         this.state = {
//             activeIndex:0,
//             carouselItems: [
//                 {img: 'London.jpg', citie: 'London'},
//                 {img: 'Paris.jpg', citie: 'Paris'},
//                 {img: 'Bali.jpg', citie: 'Bali'},
//                 {img: 'Cafayate.jpg', citie: 'Cafayate'},
//                 {img: 'Calafate.jpg', citie: 'Calafate'},
//                 {img: 'Bangkok.jpg', citie: 'Bangkok'},
//                 {img: 'NewYork.jpg', citie: 'New York'},
//                 ]
//         }
//     }

//     _renderItem({item,index}){
//         return (
//             <ImageBackground source={{uri:`https://nd-mytinerary.herokuapp.com/assets/fotos/${item.img}`}} style={styles.citiesImg}>
//                 <Text style={styles.title}>Popular MyTinerary</Text>
//                 <Text style={styles.citiesH}>{item.citie}</Text>
//             </ImageBackground>
//     )
//     }

//     render() {
//         return (
//             <View style={{flexDirection:'row', }}>
//                 <Carousel
//                     layout={"default"}
//                     ref={ref => this.carousel = ref}
//                     data={this.state.carouselItems}
//                     sliderWidth={400}
//                     itemWidth={300}
//                     renderItem={this._renderItem}
//                     onSnapToItem = { index => this.setState({activeIndex:index}) } />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     citiesImg: {
// /*     justifyContent: "center",
//  */    width: 300,
//     height: 280,
//     /* alignItems: "center",
//     alignSelf: 'center', */
//     justifyContent: 'flex-end',
//     marginVertical: 10,
//     // marginLeft: 10,
//     },
//     title: {
//         backgroundColor: "white",
//         color: 'orange',
//         width: '100%',
//         textAlign: 'center',
//         padding: 8,
//         fontSize: 18,
//         fontWeight: '700',
//         textAlign: 'center'
//     },
//     citiesH: {
//     backgroundColor: "orange",
//     color: 'white',
//     width: '100%',
//     textAlign: 'center',
//     padding: 8,
//     fontSize: 18,
//     fontWeight: '700',
//     textAlign: 'center'
//     },
// });