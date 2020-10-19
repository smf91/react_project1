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
                    <ProfileStatus status = {props.status} 
                                    updateStatus = {props.updateStatus}
                    />
                    <div className={cls.descriptionName}>
                        {props.profileInfo.fullName}
                    </div>
                    {/* <div>{props.myData.city}</div> */}
                    {/* <div>{props.myData.birthday}</div> */}
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
