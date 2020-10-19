import { authAPI } from '../api/api'

const SET_LOGIN_DATA = "SET_LOGIN_DATA"
const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
        data: null,
        isFetching : false,
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

export const loginTC = (formData) => (dispatch) => {
    authAPI.loginMe(formData)
        .then(data => {
            if (data.resultCode === 0) {
                console.log('login it\'s ok!!');
                dispatch(authMeTC())
            }
        })
}

export const logoutTC = () => (dispatch) => {
    // dispatch(setLoginData(loginData))
    authAPI.logoutMe().then(data => {
            // dispatch(toogleIsFetching(false))
            if (data.resultCode === 0) {
                console.log('logout it\'s ok!');
                dispatch(authMeTC(null))
            }
        })
}

export default authReducer;