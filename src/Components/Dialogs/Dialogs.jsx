import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';





const Dialogs = () => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogBlock}>
                <DialogItem />
            </div>
            <div className={cls.messageBlock}>
                <MessageItem />
            </div>
        </div>
    )
}

export default Dialogs;
