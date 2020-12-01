import { authMeTC } from './auth-reducer'

const INITIALIZED_SUCCESS: string = "INITIALIZED_SUCCESS"

export type initialStateType = {
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
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
    return async (dispatch: any) => {
        let promise = await dispatch(authMeTC())
        //  используя promise all  мы можем дождаться выполнения нескольких промисов
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export default appReducer;