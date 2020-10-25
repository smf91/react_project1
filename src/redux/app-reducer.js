import { authMeTC } from './auth-reducer'

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}

export const initializeApp = () => {
    return async (dispatch) => {
        let promise = await dispatch(authMeTC())
        //  используя promise all  мы можем дождаться выполнения нескольких промисов
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export default appReducer;