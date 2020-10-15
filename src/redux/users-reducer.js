// import { bindActionCreators } from "redux"
import { followAPI, userAPI } from '../api/api'

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
                person: state.person.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                person: state.person.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
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

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const onPageChangetTC = (pageNumber, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        userAPI.getUsers(pageNumber, pageSize).then(data => { 
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items)) 
        })
    }
}



export const followTC = (userID) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userID))
        followAPI.follow(userID)
        .then(data => {if (data.resultCode === 0) {dispatch(follow(userID))}
        dispatch(toggleFollowingInProgress(false, userID))
        })
    }
}
export const unfollowTC = (userID) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userID))
        followAPI.unfollow(userID)
        .then(data => {if (data.resultCode === 0) {dispatch(unfollow(userID))}
        dispatch(toggleFollowingInProgress(false, userID))
        })
    }
}

export default usersReducer