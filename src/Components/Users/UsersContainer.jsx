import React from 'react';
import { toggleFollowingInProgress, toggleIsFetching, setTotalUsersCount, setCurrentPage, follow, unfollow, setUsers } from './../../redux/users-reducer'
import Users from './Users';
import Fetching from './../Common/Fetching/Fetching'
import { connect } from 'react-redux'
// import * as axios from 'axios'
import {UserAPI} from '../../api/api'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        UserAPI.getUsers(pageNumber, this.props.pageSize).then(data => { 
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items) 
            })
    }
    render() {
        return <>
        {this.props.isFetching ? <Fetching/> 
                                :
                                <Users {...this.props} onPageChanged={this.onPageChanged} />}
            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.person,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress : state.usersPage.followingInProgress
    }
}
//  было
// const mapDispathToProps = (dispatch) => {
//     return {
//         toggleIsFetching: (value) => { dispatch(toogleIsFetchingAC(value)) },
//         setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
//         follow: (userID) => { dispatch(followAC(userID)) },
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) }
//     }
// }
// стало
export default connect(mapStateToProps,{toggleFollowingInProgress, toggleIsFetching, setTotalUsersCount, setCurrentPage, follow, unfollow, setUsers })(UsersContainer)
