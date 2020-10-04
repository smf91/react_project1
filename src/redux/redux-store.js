import dialogsReducer from  './dialogs-reducer'
import profileReducer from './profile-reducer'
import personReducer from './person-reducer'
import { createStore, combineReducers } from "redux"
// const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    person : personReducer
})

let store = createStore(reducers);


export default store;