// import { bindActionCreators } from "redux"
import { followAPI, userAPI } from '../api/api'
import { updateObjectInArray } from '../utils/helper/objects-helper'

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


let initialState = {
    person: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
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

export const toggleFollowingInProgress = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userID })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (person) => ({ type: SET_USERS, person })

// Thunk creater
export const getUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const onPageChangetTC = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        let data = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreater) => {
    dispatch(toggleFollowingInProgress(true, userID))
    let data = await apiMethod(userID)
    if (data.resultCode === 0) { dispatch(actionCreater(userID)) }
    dispatch(toggleFollowingInProgress(false, userID))
}

export const followTC = (userID) => {
    return async (dispatch) => {
        let apiMethod = followAPI.follow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, follow)
    }
}

export const unfollowTC = (userID) => {
    return async (dispatch) => {
        let apiMethod = followAPI.unfollow.bind(followAPI)
        followUnfollowFlow(dispatch, userID, apiMethod, unfollow)
    }
}

export default usersReducer