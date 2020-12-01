import React, { useEffect } from 'react'
import { getUsersTC, toggleFollowingInProgress, toggleIsFetching, setTotalUsersCount, setCurrentPage, followTC, unfollowTC, setUsers, onPageChangetTC } from '../../redux/users-reducer'
import Users from './Users'
import Fetching from '../Common/Fetching/Fetching'
import { connect } from 'react-redux'
import * as usersel from '../../redux/users-selector'
import { compose } from 'redux'
import {AppStateType} from '../../redux/redux-store'


type PropsType = {
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    pageNumber: number,
    getUsersTC: (currentPage: number, pageSize: number) => void,
    onPageChangetTC: (currentPage: number, pageSize: number) => void,
    users: Array <any>,
    followingInProgress: Array<number>,
    totalUsersCount: number
}

type onPageChangedType = (pageNumber: number) => void



const UsersContainer: React.FC<PropsType> = React.memo(({ getUsersTC, currentPage, pageSize, isFetching,
                                                            totalUsersCount, users, followingInProgress,   ...props }) => {
    useEffect(() => {
        getUsersTC(currentPage, pageSize)
    }, [currentPage, pageSize, getUsersTC])
    const onPageChanged: onPageChangedType = (pageNumber: number) => {
        props.onPageChangetTC(pageNumber, pageSize)
    }
    return <>
        {isFetching ? <Fetching />
                    // : <Users {...props} onPageChanged={onPageChanged} pageSize={pageSize} />}
                    : <Users onPageChanged={onPageChanged} pageSize={pageSize} currentPage={currentPage}
                                followTC={followTC} unfollowTC={unfollowTC} totalItemsCount={totalUsersCount} users={users}
                                followingInProgress ={followingInProgress}/>}
        </>
})



type MapStateToPropsType= {
    users: Array <any>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: usersel.getPersonSelector(state),
        pageSize: usersel.getPageSizeSelector(state),
        totalUsersCount: usersel.getTotalUsersCountSelector(state),
        currentPage: usersel.getCurrentPageSelector(state),
        isFetching: usersel.getIsFetchingSelector(state),
        followingInProgress: usersel.getFollowingInProgressSelector(state)
    }
}

type MapDispathPropsType= {
    getUsersTC: (currentPage: number, pageSize: number) => void,
    onPageChangetTC: (currentPage: number, pageSize: number) => void
}

export default compose(
    connect(mapStateToProps, {
        toggleFollowingInProgress,
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