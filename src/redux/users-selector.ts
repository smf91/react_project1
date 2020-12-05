import { AppStateType } from './redux-store'
import {createSelector} from 'reselect'

export const getPersonSelector = (state: AppStateType) =>{
    return state.usersPage.person
}
//  cоздаем селектор, сложный селектор создается с помощью reselect.
//  В зависимостях можно указать несколько селекторов в том числе и не простых
export const getPersonSelectorSuper = createSelector(getPersonSelector,
    (person)=>{
    return person.filter(u => true)
})
export const getPageSizeSelector = (state: AppStateType) =>{
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state: AppStateType) =>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state: AppStateType) =>{
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppStateType) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state: AppStateType) =>{
    return state.usersPage.followingInProgress
}