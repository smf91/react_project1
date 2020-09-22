import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

const myProfile = props.personData.find(person => person.myprofile === true)

    return (
        <div className = {cls.profileInfo}>
            <div className={cls.avatar}>
                <img src= {myProfile.img} alt="avatar"/>
            </div>
            <div className={cls.description}>
                <div>{myProfile.firstName} {myProfile.lastName}</div>
                <div>{myProfile.city}</div>
                <div>{myProfile.birthday}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
