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

export const setUserData = (data) => ({ type: SET_USER_DATA, data  })
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export default authReducer;