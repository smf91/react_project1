import React from 'react';
import { toogleIsFetching, setTotalUsersCount, setCurrentPage, follow, unfollow, setUsers } from './../../redux/users-reducer'
import Users from './Users';
import Fetching from './../Common/Fetching/Fetching'
import { connect } from 'react-redux'
import * as axios from 'axios'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count =${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize}`)
            .then(response => { 
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items) 
            })
    }
    render() {
        return <>
        {this.props.isFetching ? <Fetching/> 
                                :
                                <Users
                                    totalUsersCount={this.props.totalUsersCount}
                                    pageSize={this.props.pageSize}
                                    onPageChanged={this.onPageChanged}
                                    currentPage={this.props.setCurrentPage}
                                    users={this.props.users}
                                    unfollow={this.props.unfollow}
                                    follow={this.props.follow}
                                    />}
            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.person,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching
    }
}

// const mapDispathToProps = (dispatch) => {
//     return {
//         toogleIsFetching: (value) => { dispatch(toogleIsFetchingAC(value)) },
//         setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
//         follow: (userID) => { dispatch(followAC(userID)) },
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) }
//     }
// }

export default connect(mapStateToProps,{toogleIsFetching, setTotalUsersCount, setCurrentPage, follow, unfollow, setUsers })(UsersContainer)
