// import React from 'react';
// import cls from './NewPost.module.scss';
import {setCurrentPageAC, followAC, unfollowAC, setUsersAC} from './../../redux/users-reducer'
import Users from './Users';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.person,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users)
export default UsersContainer;
