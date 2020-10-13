import React from 'react';
import cls from './ProfileInfo.module.scss';
import Fetching from '../../Common/Fetching/Fetching'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profileInfo){
        return  <Fetching />
    }
    else {
        return (
            <div className = {cls.profileInfo}>
                <div className={cls.avatar}>
                    <img src= {props.profileInfo.photos.large} alt="avatar"/>
                </div>
                <div className={cls.description}>
                    <div>{props.profileInfo.fullName}</div>
                    <ProfileStatus status = {"Hello, I am faind!"}/>
                    {/* <div>{props.myData.city}</div> */}
                    {/* <div>{props.myData.birthday}</div> */}
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
