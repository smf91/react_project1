import React, {useEffect} from 'react';
import { getUsersTC, toggleFollowingInProgress, toggleIsFetching, setTotalUsersCount, setCurrentPage, followTC, unfollowTC, setUsers, onPageChangetTC } from './../../redux/users-reducer'
import Users from './Users';
import Fetching from './../Common/Fetching/Fetching'
import { connect } from 'react-redux'
import * as usersel from './../../redux/users-selector'
import {compose} from 'redux'

const UsersContainer = React.memo(({getUsersTC, currentPage, pageSize, isFetching, ...props}) => {
    useEffect( () => {
        getUsersTC(currentPage, pageSize)
    }, [currentPage, pageSize, getUsersTC])
    const onPageChanged = (pageNumber) => {
        props.onPageChangetTC(pageNumber, pageSize)
    }
    return <>
        {isFetching   ? <Fetching/> 
                        :<Users {...props} onPageChanged={onPageChanged} pageSize ={pageSize} />}
        </>
})

// class UsersContainer extends React.Component {
//     componentDidMount() {
//         this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
//     }
//     onPageChanged = (pageNumber) => {
//         this.props.onPageChangetTC(pageNumber, this.props.pageSize)
//     }
//     render() {
//         return <>
//         {this.props.isFetching ? <Fetching/> 
//                                 :<Users {...this.props} onPageChanged={this.onPageChanged} />}
//             </>
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: usersel.getPersonSelector(state),
        pageSize: usersel.getPageSizeSelector(state),
        totalUsersCount: usersel.getTotalUsersCountSelector(state),
        currentPage: usersel.getCurrentPageSelector(state),
        isFetching : usersel.getIsFetchingSelector(state),
        followingInProgress : usersel.getFollowingInProgressSelector(state)
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
// export default connect(mapStateToProps,{    toggleFollowingInProgress, 
//                                             toggleIsFetching, 
//                                             setTotalUsersCount, 
//                                             setCurrentPage, 
//                                             followTC, 
//                                             unfollowTC, 
//                                             setUsers,
//                                             getUsersTC,
//                                             onPageChangetTC 
//                                         }) (UsersContainer)
// еще упростили используя compose
export default compose (
    connect(mapStateToProps,{    toggleFollowingInProgress, 
                                    toggleIsFetching, 
                                    setTotalUsersCount, 
                                    setCurrentPage, 
                                    followTC, 
                                    unfollowTC, 
                                    setUsers,
                                    getUsersTC,
                                    onPageChangetTC 
    })
)
(UsersContainer)