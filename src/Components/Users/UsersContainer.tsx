import React, { useEffect } from 'react'
import { getUsersTC, followTC, unfollowTC, onPageChangetTC } from '../../redux/users-reducer'
import Users from './Users'
import Fetching from '../Common/Fetching/Fetching'
import { connect } from 'react-redux'
import * as usersSelector from '../../redux/users-selector'
import { compose } from 'redux'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
    users: Array <any>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
type MapDispathPropsType= {
    getUsersTC: (currentPage: number, pageSize: number) => void,
    onPageChangetTC: (currentPage: number, pageSize: number) => void,
    followTC:(userID: number)=> void,
    unfollowTC:(userID: number)=> void      
}
type OwnPropsType={
    pageTitle : string,
    pageNumber: number
}
type PropsType = MapStatePropsType & MapDispathPropsType & OwnPropsType


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
                <h2>{props.pageTitle}</h2>
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
        users: usersSelector.getPersonSelector(state),
        pageSize: usersSelector.getPageSizeSelector(state),
        totalUsersCount: usersSelector.getTotalUsersCountSelector(state),
        currentPage: usersSelector.getCurrentPageSelector(state),
        isFetching: usersSelector.getIsFetchingSelector(state),
        followingInProgress: usersSelector.getFollowingInProgressSelector(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispathPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        followTC,
        unfollowTC,
        getUsersTC,
        onPageChangetTC
    })
)
    (UsersContainer)