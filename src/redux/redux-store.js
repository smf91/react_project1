import dialogsReducer from  './dialogs-reducer'
import profileReducer from './profile-reducer'
import personReducer from './person-reducer'
import { createStore, combineReducers, applyMiddleware } from "redux"
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    messagesPage : dialogsReducer,
    profilePage : profileReducer,
    person : personReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer,
    //  обязательно указывать form для formReducer
    form : formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store;