import { authAPI } from '../api/api'

const SET_LOGIN_DATA = "SET_LOGIN_DATA"
const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
        data: null,
        isFetching : false,
        loginData : null
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
                ...state, isFetching : action.isFetching
            }
        case SET_LOGIN_DATA:
            debugger
            return {
                ...state, loginData : action.loginData
            }
        default:
            return state
    }
}
export const setLoginData = (loginData) => ({ type: SET_LOGIN_DATA, loginData  })
export const setUserData = (data) => ({ type: SET_USER_DATA, data  })
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

// Thunk creater
export const authMeTC = () => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        authAPI.authMe().then(data => {
                if (data.resultCode === 0)  {
                    dispatch(setUserData(data))
                }
            })
    }
}

export const loginTC = (loginData) => (dispatch) => {
    debugger
    dispatch(setLoginData(loginData))
    authAPI.loginhMe(loginData)
        .then(data => {
            // dispatch(toogleIsFetching(false))
            if (data.resultCode === 0) {
                console.log('its ok!!!!!!');
                // dispatch(setUserStatus(status))
            }
        })
}

export default authReducer;