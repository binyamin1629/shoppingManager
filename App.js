import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/indexScreen'
import ScreenCreate from './src/screens/ScreenCreate'
import ScreenEdit from './src/screens/ScreenEdit'
import  {store,persistor} from './src/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';0
//import AsyncStorage from '@react-native-community/async-storage'







const nvigator = createStackNavigator({
  Index: IndexScreen,
  Create: ScreenCreate,
  Edit: ScreenEdit


}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Shopping List ',

  }
})
const App = createAppContainer(nvigator)

// export default () => {
//   return <Provider store={store}><App/></Provider>



// }



export default () => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <App />
        </PersistGate>
    </Provider>
  )


}