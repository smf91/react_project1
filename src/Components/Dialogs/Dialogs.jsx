import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.scss';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogBlock}>
                <DialogItem  dialogsData = {props.state.dialogsData} person = {props.person}/>
            </div>
            <div className={cls.messageBlock}>
                <MessageItem  messageData = {props.state.messageData}
                                newMessageText = {props.state.newMessageText}
                                dispatch = {props.dispatch}
                                />
            </div>
        </div>
    )
}

export default Dialogs;
