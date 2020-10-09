import dialogsReducer from  './dialogs-reducer'
import profileReducer from './profile-reducer'
import personReducer from './person-reducer'
import { createStore, combineReducers } from "redux"
import usersReducer from './users-reducer'


let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    person : personReducer,
    usersPage : usersReducer
})

let store = createStore(reducers);

window.store = store
export default store;