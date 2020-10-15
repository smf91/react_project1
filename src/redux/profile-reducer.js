import { profileAPI } from '../api/api'

const UPDATE_TEXTAREA_NEW_POST = "UPDATE-TEXTAREA-NEW-POST"
const CREATE_POST = "CREATE-POST"
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    currentProfile : null,
    isFetching : false,
    postsData: [
        { id: 1, message: "first text posts", likesCount: 12 },
        { id: 2, message: "second text posts", likesCount: 23 }
    ],
    newPostText: "",
    status : ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_TEXTAREA_NEW_POST:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy 
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching : action.IsFetching
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state, currentProfile : action.currentProfileInfo
            }
        case SET_USER_STATUS:
            return {
                ...state, status : action.status
            }
        default:
            return state
    }
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const toogleIsFetching = (IsFetching) => ({ type: TOGGLE_IS_FETCHING, IsFetching })
export const setCurrentProfile = (currentProfileInfo) => ({ type: SET_CURRENT_PROFILE, currentProfileInfo})
export const createPostActionCreater = () => ({ type: CREATE_POST })
export const updateTextareaNewPostActionCreater = (text) => ({ type: UPDATE_TEXTAREA_NEW_POST, text: text })

// Thunk creater
export const getProfileTC = (userId) => {

    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(toogleIsFetching(false))
                dispatch(setCurrentProfile(data))
            })
    }
}

export const getStatusTC = (userId) => {

    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(toogleIsFetching(false))
                dispatch(setUserStatus(data))
            })
    }
}

export const updateStatusTC = (status) => {

    return (dispatch) => {
        // dispatch(toogleIsFetching(true))
        profileAPI.updateStatus(status)
            .then(data => {
                // dispatch(toogleIsFetching(false))
                if ( data.resultCode ===0){
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default profileReducer;