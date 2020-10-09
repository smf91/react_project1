import React from 'react';
import cls from './ProfileInfo.module.css';
import Fetching from '../../Common/Fetching/Fetching'

const ProfileInfo = (props) => {
    if (!props.profileInfo){
        return  <Fetching />
    }
    else {
        return (
            <div className = {cls.profileInfo}>
                <div className={cls.avatar}>
                    dddd
                    <img src= {props.profileInfo.photos.small} alt="avatar"/>
                </div>
                <div className={cls.description}>
                    {/* <div>{props.myData.firstName} {props.myData.lastName}</div> */}
                    {/* <div>{props.myData.city}</div> */}
                    {/* <div>{props.myData.birthday}</div> */}
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
