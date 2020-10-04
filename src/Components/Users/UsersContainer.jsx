// import React from 'react';
// import cls from './NewPost.module.scss';
import {followAC, unfollowAC, setUsersAC} from './../../redux/users-reducer'
import Users from './Users';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.person
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users)
export default UsersContainer;
