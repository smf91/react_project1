import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.scss';
import MessageItemContainer from './MessageItem/MessageItemContainer';

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogBlock}>
                <DialogItem  store = {props.store}/>
            </div>
            <div className={cls.messageBlock}>
                <MessageItemContainer  store = {props.store} 
                                />
            </div>
        </div>
    )
}

export default Dialogs;
