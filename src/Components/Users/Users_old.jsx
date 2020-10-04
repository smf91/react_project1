import React from 'react'
import cls from './Users.module.scss';
import * as axios from 'axios'

let Users = (props) =>{
    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        debugger
        props.setUsers()
        })
    }
    return (
        <div>
            {
                props.users.map(u => <div className= {cls.userBlockItem} key = {u.id}>
                        <div className ={cls.leftBlock}>
                            <div className ={cls.avatar}>
                                <img src={u.img} alt="avatar"/>
                            </div>
                            <div className ={cls.btn}>
                                {u.followed ? 
                                <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> 
                                : 
                                <button onClick = {() => {props.follow(u.id)}} >Follow</button>
                                }
                            </div>
                        </div>
                        <div className ={cls.rightBlock} >
                            <div className = {cls.userInfo}>
                                <div className = {cls.userName}> {u.firstName} {u.lastName} </div>
                                <div className = {cls.userCity}> {u.city} </div>
                            </div>
                            <div className = {cls.userStatus}> {u.status} </div>
                        </div>
                </div>)
            }
        </div>
    )
}
export default Users