import { AppStateType} from './redux-store';
// import { bindActionCreators } from "redux"
import { followAPI, userAPI } from '../api/api'
import { updateObjectInArray } from '../utils/helper/objects-helper'
import { PhotosType } from '../types/types'
import { ThunkAction } from 'redux-thunk';
import {Dispatch} from 'redux'

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

type PersonType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType

}
export type InitialStateType = {
    person: Array<PersonType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>  // array of users id
}
let initialState: InitialStateType = {
    person: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    isFetching: false
}

const usersReducer = (state = initialState, action: ActionsTypes ): InitialStateType => { // <------------- Fixi
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                person: updateObjectInArray(state.person, action.userID, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                person: updateObjectInArray(state.person, action.userID, 'id', { followed: false })
            }
        case SET_USERS:
            return { ...state, person: action.person }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                // followingInProgress: action.isFetching
                //     ? [...state.followingInProgress, action.userID]
                //     : [state.followingInProgress.filter(id => id !== action.userID)]
            }
        default:
            return state
    }
}

type ActionsTypes = FollowActionType | ToggleFollowingInProgressActionType | ToggleIsFetchingActionType| SetTotalUsersCountActionType 
                    | SetCurrentPageActionType| UnfollowActionType | SetUsersActionType

type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userID: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userID: number): ToggleFollowingInProgressActionType => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, userID, isFetching })

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

type FollowActionType = {
    type: typeof FOLLOW
    userID: number
}
export const follow = (userID: number): FollowActionType => ({ type: FOLLOW, userID})

type UnfollowActionType = {
    type: typeof UNFOLLOW
    userID: number
}
export const unfollow = (userID: number): UnfollowActionType => ({ type: UNFOLLOW, userID })

type SetUsersActionType = {
    type: typeof SET_USERS
    person: Array<PersonType>
}
export const setUsers = (person: Array<PersonType>): SetUsersActionType => ({ type: SET_USERS, person })


// Thunk creater
type DispathType = Dispatch <ActionsTypes>
type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsersTC = (currentPage: number, pageSize: number): ThunkType  => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const onPageChangetTC = (pageNumber: number, pageSize: number) : ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        let data = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}

const followUnfollowFlow = async (dispatch: DispathType,  userID: number, apiMethod: any, actionCreater: (userID: number)=> FollowActionType | UnfollowActionType )=> {
    dispatch(toggleFollowingInProgress(true, userID))
    let data = await apiMethod(userID)
    if (data.resultCode === 0) { dispatch(actionCreater(userID)) }
    dispatch(toggleFollowingInProgress(false, userID))
}

export const followTC = (userID: number) : ThunkType => {
    return async (dispatch) => {
        let apiMethod = followAPI.follow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, follow)
    }
}

export const unfollowTC = (userID: number) : ThunkType => {
    return async (dispatch) => {
        let apiMethod = followAPI.unfollow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, unfollow)
    }
}

export default usersReducer