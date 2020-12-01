import { profileAPI } from '../api/api'
import { CurrentProfileType, PostsDataType, ContactsType, PhotosType } from '../types/types'
const CREATE_POST: string = "CREATE-POST"
const SET_CURRENT_PROFILE: string = "SET_CURRENT_PROFILE"
const TOGGLE_IS_FETCHING: string = "TOGGLE_IS_FETCHING"
const SET_USER_STATUS: string = "SET_USER_STATUS"
const SAVE_PHOTO_SUCCES: string = "SAVE_PHOTO_SUCCES"


export type InitialStateType = {
    isFetching: boolean,
    currentProfile: CurrentProfileType | null,
    status: string
    postsData: Array<PostsDataType>
}

let initialState: InitialStateType = {
    isFetching: false,
    currentProfile: null,
    status: "",
    postsData: [
        { id: 1, message: "first text posts", likesCount: 12 },
        { id: 2, message: "second text posts", likesCount: 23 }
    ]
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SAVE_PHOTO_SUCCES:
            return {
                ...state,
                // currentProfile: { ...currentProfile, photos: action.photos }
            }
        default:
            return state
    }
}
type SavePhotoSuccesActionType = {
    type: typeof SAVE_PHOTO_SUCCES,
    photos: string
}
export const savePhotoSucces = (photos: string): SavePhotoSuccesActionType => ({ type: SAVE_PHOTO_SUCCES, photos })

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })

type ToogleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    IsFetching: boolean
}
export const toogleIsFetching = (IsFetching: boolean): ToogleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, IsFetching })

type SetCurrentProfileActionType = {
    type: typeof SET_CURRENT_PROFILE,
    currentProfileInfo: Object
}
export const setCurrentProfile = (currentProfileInfo: any): SetCurrentProfileActionType => ({ type: SET_CURRENT_PROFILE, currentProfileInfo })

type CreatePostAcActionType = {
    type: typeof CREATE_POST,
    textNewPost: string
}
export const createPostAC = (textNewPost: string): CreatePostAcActionType => ({ type: CREATE_POST, textNewPost })

// Thunk creater
export const getProfileTC = (userId: number) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    let data = await profileAPI.getProfile(userId)
    dispatch(toogleIsFetching(false))
    dispatch(setCurrentProfile(data))
}

export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateStatusTC = (status: string) => async (dispatch: any) => {
    // получаем статус с формы и  апдейтим его на сервак
    let data = await profileAPI.updateStatus(status)
    // после тогого как приходит подтверждение что все ок
    if (data.resultCode === 0) {
        // сетаем статус в наш глобальный стейт
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSucces(data.photos))
    }
}


export default profileReducer; 