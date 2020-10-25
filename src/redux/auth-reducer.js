import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_LOGIN_DATA = "SET_LOGIN_DATA"
const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    data: null,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setLoginData = (loginData) => ({ type: SET_LOGIN_DATA, loginData })
export const setUserData = (data) => ({ type: SET_USER_DATA, data })
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

// Thunk creater
export const authMeTC = () => {
    return async (dispatch) => {
        dispatch(toogleIsFetching(true))
        let data = await authAPI.authMe()
        if (data.resultCode === 0) {
            dispatch(setUserData(data))
        }
    }
}

export const loginTC = (formData) => async (dispatch) => {
    let data = await authAPI.loginMe(formData)
    if (data.resultCode === 0) {
        dispatch(authMeTC())
    } else {
        //  специальный action creater  из redux-form 
        // (в ней передаем  какую форму и либо имя поля либо _error  указывающий всю форму)
        let action = stopSubmit("login", { _error: data.messages.length === 0 ? 'somsing error' : data.messages[0] })
        dispatch(action)
    }
}

export const logoutTC = () => async (dispatch) => {
    let data = await authAPI.logoutMe()
    if (data.resultCode === 0) {
        dispatch(authMeTC(null))
    }
}

export default authReducer;