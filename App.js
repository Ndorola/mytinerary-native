import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/MainNavDrawer'
import Welcome from './screens/Welcome'
import Cities from './screens/Cities'
import City from './screens/City'
import Itinerary from './screens/Itinerary'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Carousel from './components/Carousel'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'

const myStore = createStore(rootReducer, applyMiddleware(thunk))



const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      {/* <Welcome /> */}
      {/* <Cities /> */}
      {/* <Ctity /> */}
      {/* <Itineraries /> */}
      {/* <Itinerary /> */}
      {/* <SignIn /> */}
      {/* // <SignUp /> */}
      {/* <Carousel /> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  
})