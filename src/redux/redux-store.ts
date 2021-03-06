import dialogsReducer from  './dialogs-reducer'
import profileReducer from './profile-reducer'
import personReducer from './person-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
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

type ReducersType = typeof reducers // создаем тип ReducersType на основе reducers
export type AppStateType = ReturnType <ReducersType> // определяем то что возваращается ReducersType и фиксируем его как AppStateType

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store

export default store