import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';





const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogBlock}>
                <DialogItem  dialogsData = {props.dialogsData}/>
            </div>
            <div className={cls.messageBlock}>
                <MessageItem  messageData = {props.messageData}/>
            </div>
        </div>
    )
}

export default Dialogs;
