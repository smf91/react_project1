import React from 'react'
import cls from './Users.module.scss';
import usersicon from '../../assets/images/usericon.png'
import { NavLink } from 'react-router-dom';
import Pagination from '../Common/Pagination/Pagination'
import { PersonType } from '../../types/types'

export type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<any> //------PersonType ?
    followingInProgress: Array<number>
    unfollowTC: (UserId: number) => void
    followTC: (UserId: number) => void
    onPageChanged: (pageNumber: number) => void,
}

let Users: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Pagination onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                pageSize={props.pageSize} totalItemsCount={props.totalItemsCount} />
            {
                props.users.map(u => <div className={cls.userBlockItem} key={u.id}>
                    <div className={cls.leftBlock}>
                        <div className={cls.avatar}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : usersicon} alt="avatar" />
                            </NavLink>
                        </div>
                        <div className={cls.btn}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.unfollowTC(u.id) }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.followTC(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={cls.rightBlock} >
                        <div className={cls.userInfo}>
                            <div className={cls.userName}> {u.name}</div>
                            <div className={cls.userCity}> {u.city} </div>
                        </div>
                        <div className={cls.userStatus}> {u.status} </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users