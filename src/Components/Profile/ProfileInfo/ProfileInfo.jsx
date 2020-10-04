import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className = {cls.profileInfo}>
            <div className={cls.avatar}>
                <img src= {props.myData.img} alt="avatar"/>
            </div>
            <div className={cls.description}>
                <div>{props.myData.firstName} {props.myData.lastName}</div>
                <div>{props.myData.city}</div>
                <div>{props.myData.birthday}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
