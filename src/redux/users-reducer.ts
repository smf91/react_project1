// import { bindActionCreators } from "redux"
import { followAPI, userAPI } from '../api/api'
import { updateObjectInArray } from '../utils/helper/objects-helper'
import { PhotosType } from '../types/types'

const FOLLOW: string = "FOLLOW"
const UNFOLLOW: string = "UNFOLLOW"
const SET_USERS: string = "SET_USERS"
const SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT: string = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING: string = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS: string = "TOGGLE_FOLLOWING_IN_PROGRESS"

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
    followingInProgress: Array<number>, // array of users id
    isFetching: boolean
}
let initialState: InitialStateType = {
    person: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    isFetching: false
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : [state.followingInProgress.filter(id => id !== action.userID)]
            }
        default:
            return state
    }
}
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching: boolean,
    userID: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userID: number): ToggleFollowingInProgressActionType => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userID })

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

type FollowActionType = {
    type: typeof FOLLOW,
    userID: number
}
export const follow = (userID: number): FollowActionType => ({ type: FOLLOW, userID })

type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userID: number
}
export const unfollow = (userID: number): UnfollowActionType => ({ type: UNFOLLOW, userID })

type SetUsersActionType = {
    type: typeof SET_USERS,
    person: Array<PersonType>
}
export const setUsers = (person: Array<PersonType>): SetUsersActionType => ({ type: SET_USERS, person })

// Thunk creater
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const onPageChangetTC = (pageNumber: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        let data = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreater: any) => {
    dispatch(toggleFollowingInProgress(true, userID))
    let data = await apiMethod(userID)
    if (data.resultCode === 0) { dispatch(actionCreater(userID)) }
    dispatch(toggleFollowingInProgress(false, userID))
}

export const followTC = (userID: number) => {
    return async (dispatch: any) => {
        let apiMethod = followAPI.follow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, follow)
    }
}

export const unfollowTC = (userID: number) => {
    return async (dispatch: any) => {
        let apiMethod = followAPI.unfollow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, unfollow)
    }
}

export default usersReducer