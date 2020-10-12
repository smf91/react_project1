import React from 'react';
import { getUsersTC, toggleFollowingInProgress, toggleIsFetching, setTotalUsersCount, setCurrentPage, followTC, unfollowTC, setUsers, onPageChangetTC } from './../../redux/users-reducer'
import Users from './Users';
import Fetching from './../Common/Fetching/Fetching'
import { connect } from 'react-redux'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangetTC(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
        {this.props.isFetching ? <Fetching/> 
                                :<Users {...this.props} onPageChanged={this.onPageChanged} />}
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
export default connect(mapStateToProps,{    toggleFollowingInProgress, 
                                            toggleIsFetching, 
                                            setTotalUsersCount, 
                                            setCurrentPage, 
                                            followTC, 
                                            unfollowTC, 
                                            setUsers,
                                            getUsersTC,
                                            onPageChangetTC 
                                        }) (UsersContainer)
