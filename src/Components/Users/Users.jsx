import React from 'react'
import cls from './Users.module.scss';
import usersicon from '../../assets/images/usericon.png'
import {NavLink} from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={cls.pageNumbers}>
                {pages.map(p => {
                    return <div onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && cls.selectedPage} > {p}</div>
                })}
            </div>
            {
                props.users.map(u => <div className={cls.userBlockItem} key={u.id}>
                    <div className={cls.leftBlock}>
                        <div className={cls.avatar}>
                        <NavLink to ={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : usersicon} alt="avatar" />
                        </NavLink>
                        </div>
                        <div className={cls.btn}>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button onClick={() => { props.follow(u.id) }} >Follow</button>
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