import {combineReducers} from 'redux'
import shoppingReducer from './shopping/shoppingReducer'
import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage'

import {persistReducer} from 'redux-persist'
//import storge for react-native

const persistConfig={
   key:'root',
   storage:AsyncStorage,
   whitelist:['shop']
}

const roodReducer=combineReducers({
   shop:shoppingReducer
})
export default persistReducer(persistConfig,roodReducer)
//export default roodReducer