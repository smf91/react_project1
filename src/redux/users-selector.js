import {createSelector} from 'reselect'

export const getPersonSelector = (state) =>{
    return state.usersPage.person
}
//  cоздаем селектор сложный селектор с помощью reselect. В зависимостях можно указать несколько
//  селекторов в том числе и не простых
export const getPersonSelectorSuper = createSelector(getPersonSelector, (person)=>{
    return person.filter(u=> true)
})

export const getPageSizeSelector = (state) =>{
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state) =>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state) =>{
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state) =>{
    return state.usersPage.followingInProgress
}