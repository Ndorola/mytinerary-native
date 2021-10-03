import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/MainNavDrawer'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
// import { LogBox } from 'react-native'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {

  // Ignore log notification by message
  // LogBox.ignoreLogs(['Warning: ...']);
  // Ignore all log notifications
  // LogBox.ignoreAllLogs();

  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  )
}

export default App