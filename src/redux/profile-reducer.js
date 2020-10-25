import { profileAPI } from '../api/api'

const CREATE_POST = "CREATE-POST"
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    currentProfile: null,
    isFetching: false,
    postsData: [
        { id: 1, message: "first text posts", likesCount: 12 },
        { id: 2, message: "second text posts", likesCount: 23 }
    ],
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            let newPost = {
                id: 3,
                message: action.textNewPost,
                likesCount: 0
            }
            let stateCopy = { ...state }
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.IsFetching
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state, currentProfile: action.currentProfileInfo
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const toogleIsFetching = (IsFetching) => ({ type: TOGGLE_IS_FETCHING, IsFetching })
export const setCurrentProfile = (currentProfileInfo) => ({ type: SET_CURRENT_PROFILE, currentProfileInfo })
export const createPostAC = (textNewPost) => ({ type: CREATE_POST, textNewPost })

// Thunk creater
export const getProfileTC = (userId) => async (dispatch) => {
    dispatch(toogleIsFetching(true))
    let data = await profileAPI.getProfile(userId)
    dispatch(toogleIsFetching(false))
    dispatch(setCurrentProfile(data))
}

export const getStatusTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateStatusTC = (status) => async (dispatch) => {
    // получаем статус с формы и  апдейтим его на сервак
    let data = await profileAPI.updateStatus(status)
    // после тогого как приходит подтверждение что все ок
    if (data.resultCode === 0) {
        // сетаем статус в наш глобальный стейт
        dispatch(setUserStatus(status))
    }
}

export default profileReducer;