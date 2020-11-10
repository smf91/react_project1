import React, { useState } from 'react'
import cls from './SetAvatar.module.scss'
import avatar from '../../../../assets/images/usericon.png'

const SetAvatar = (props) => {
    const [previewPhoto, setPreviewPhoto] = useState(null)

    const previewFile = (e) => {
        setPreviewPhoto(URL.createObjectURL(e.target.files[0]))
    }
    const onMainPhotoSelected = (e) => {
        e.preventDefault();
        if (e.currentTarget.parentElement[0].files[0]) {
            props.savePhoto(e.currentTarget.parentElement[0].files[0])
            props.setModalIsOpen(false)
        }
    }
    const closeModal = (e) => {
        e.preventDefault();
        props.setModalIsOpen(false)
    }

    return <>
        <div className={cls.modal}>
            <div className={cls.body}>
                <div className={cls.avatarBlock}>
                    <div className={cls.avatar} >
                        <img src={previewPhoto || props.photo || avatar} alt="avatar" />
                    </div>
                </div>
                <div className={cls.buttonBlock}>
                    <form action="">
                        <input type="file" onChange={previewFile} />
                        <button onClick={onMainPhotoSelected}>Ok</button>
                        <button onClick={closeModal}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default SetAvatar