import React, { useState } from 'react';
import cls from './ProfileInfo.module.scss';
import Fetching from '../../Common/Fetching/Fetching'
import ProfileStatus from './ProfileStatus'
import avatar from './../../../assets/images/usericon.png'
import SetAvatar from '../../Common/Modal/SetAvatar/SetAvatar'


const ProfileInfo = (props) => {
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const openModal = ()=> { props.isOwner && setModalIsOpen(true)}
    if (!props.profileInfo) {
        return <Fetching />
    }
    else {
        return (
            <>
                {ModalIsOpen ? <SetAvatar   savePhoto={props.savePhoto} 
                                            setModalIsOpen={setModalIsOpen} 
                                            photo={props.profileInfo.photos.large} />
                    : <div className={cls.profileInfo}>
                        <div className={cls.avatar}>
                            <img src={props.profileInfo.photos.large || avatar} alt="avatar" onClick={openModal} />
                        </div>
                        <div className={cls.description}>
                            <ProfileStatus status={props.status}
                                            updateStatus={props.updateStatus} />
                            <div className={cls.descriptionName}>
                                {props.profileInfo.fullName}
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default ProfileInfo;
