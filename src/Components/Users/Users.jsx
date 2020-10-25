import React from 'react'
import cls from './Users.module.scss';
import usersicon from '../../assets/images/usericon.png'
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Common/Pagination/Pagination'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
    return (
        <div>
            <Pagination onPageChanged={props.onPageChanged} currentPage={props.currentPage} pages={pages} />
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