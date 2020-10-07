import { bindActionCreators } from "redux"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"


let initialState = {
    person: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
                ...state, currentPage : action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount : action.totalCount
            }
        default:
            return state
    }
}

export const setTotalUsersCountAC = (totalCount)=>({type : SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (person) => ({ type: SET_USERS, person })

export default usersReducer