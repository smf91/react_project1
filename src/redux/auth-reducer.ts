import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_LOGIN_DATA: string = "SET_LOGIN_DATA"
const SET_USER_DATA: string = "SET_USER_DATA"
const TOGGLE_IS_FETCHING: string = "TOGGLE_IS_FETCHING"
const UNSET_AUTHORISATION_DATA: string = "UNSET_AUTHORISATION_DATA"

export type InitialStateType = {
    data: Object | null,
    isFetching: boolean
}

let initialState: InitialStateType = {
    data: null,
    isFetching: false
}

const authReducer = (state = initialState, action: any): InitialStateType => {
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
        case UNSET_AUTHORISATION_DATA:
            return {
                ...state, data: null
            }
        default:
            return state
    }
}

type UnsetAuthDataActionType = {
    type: typeof UNSET_AUTHORISATION_DATA
}
export const unsetAuthData = (): UnsetAuthDataActionType => ({ type: UNSET_AUTHORISATION_DATA })

type SetLoginDataActionType = {
    type: typeof SET_LOGIN_DATA,
    loginData: Object
}
export const setLoginData = (loginData: Object): SetLoginDataActionType => ({ type: SET_LOGIN_DATA, loginData })
type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: Object
}
export const setUserData = (data: Object): SetUserDataActionType => ({ type: SET_USER_DATA, data })
type ToogleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toogleIsFetching = (isFetching: boolean): ToogleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

// Thunk creater
export const authMeTC = () => {
    return async (dispatch: any) => {
        dispatch(toogleIsFetching(true))
        let data = await authAPI.authMe()
        if (data.resultCode === 0) {
            dispatch(setUserData(data))
        }
    }
}

export const loginTC = (formData: any) => async (dispatch: any) => {
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

export const logoutTC = () => async (dispatch: any) => {
    let data = await authAPI.logoutMe()
    if (data.resultCode === 0) {
        dispatch(unsetAuthData())
    }
}

export default authReducer;